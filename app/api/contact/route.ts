import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __contactRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore = globalThis.__contactRateLimitStore ?? new Map<string, RateLimitEntry>();
globalThis.__contactRateLimitStore = rateLimitStore;

function getClientIp(request: NextRequest): string {
  const testIp = request.headers.get('x-test-ip');
  if (testIp) {
    return testIp.trim();
  }

  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function validatePayload(payload: unknown) {
  if (!payload || typeof payload !== 'object') {
    return { ok: false as const, message: 'Invalid request payload.' };
  }

  const body = payload as Record<string, unknown>;

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';

  if (company.length > 0) {
    return {
      ok: true as const,
      isHoneypot: true,
      value: { name, email, message, company },
    };
  }

  if (!name || name.length < 2 || name.length > 120) {
    return { ok: false as const, message: 'Name must be between 2 and 120 characters.' };
  }

  if (!email || email.length > 180 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, message: 'Please enter a valid email address.' };
  }

  if (!message || message.length < 10 || message.length > 4000) {
    return { ok: false as const, message: 'Message must be between 10 and 4000 characters.' };
  }

  return {
    ok: true as const,
    isHoneypot: false,
    value: { name, email, message, company },
  };
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body.' }, { status: 400 });
  }

  const parsed = validatePayload(payload);

  if (!parsed.ok) {
    return NextResponse.json({ success: false, message: parsed.message }, { status: 400 });
  }

  if (parsed.isHoneypot) {
    return NextResponse.json({ success: true, message: 'Message received.' }, { status: 200 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL || (process.env.NODE_ENV !== 'production' ? 'wisyamamanullah@gmail.com' : '');

  if (!toEmail) {
    return NextResponse.json(
      { success: false, message: 'Contact receiver email is not configured.' },
      { status: 500 }
    );
  }

  if (!resendApiKey) {
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        {
          success: true,
          message: 'Message received (dev mode, email sending disabled because RESEND_API_KEY is missing).',
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: parsed.value.email,
      subject: `Portfolio Contact - ${parsed.value.name}`,
      text: `Name: ${parsed.value.name}\nEmail: ${parsed.value.email}\n\nMessage:\n${parsed.value.message}`,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}


