import { test, expect } from '@playwright/test';

test('contact API accepts valid payload', async ({ request }, testInfo) => {
  const response = await request.post('/api/contact', {
    headers: {
      'x-test-ip': `api-valid-${testInfo.project.name}`,
    },
    data: {
      name: 'API Test User',
      email: 'api-test@example.com',
      message: 'This is a valid API contact submission message for smoke testing.',
      company: '',
    },
  });

  expect([200, 201]).toContain(response.status());

  const payload = (await response.json()) as { success?: boolean };
  expect(payload.success).toBeTruthy();
});

test('contact API returns 400 for invalid payload', async ({ request }, testInfo) => {
  const response = await request.post('/api/contact', {
    headers: {
      'x-test-ip': `api-invalid-${testInfo.project.name}`,
    },
    data: {
      name: 'A',
      email: 'invalid-email',
      message: 'short',
      company: '',
    },
  });

  expect(response.status()).toBe(400);

  const payload = (await response.json()) as { success?: boolean };
  expect(payload.success).toBeFalsy();
});

test('contact API rate limits after 5 requests per 10 minutes', async ({ request }, testInfo) => {
  const headers = {
    'x-test-ip': `api-ratelimit-${testInfo.project.name}`,
  };

  for (let i = 0; i < 5; i += 1) {
    const response = await request.post('/api/contact', {
      headers,
      data: {
        name: `Rate Test ${i}`,
        email: `rate${i}@example.com`,
        message: 'This is a valid message used to test API rate limiting behavior.',
        company: '',
      },
    });

    expect([200, 201]).toContain(response.status());
  }

  const limitedResponse = await request.post('/api/contact', {
    headers,
    data: {
      name: 'Rate Test Final',
      email: 'rate-final@example.com',
      message: 'This request should be blocked by the API rate limiter.',
      company: '',
    },
  });

  expect(limitedResponse.status()).toBe(429);

  const payload = (await limitedResponse.json()) as { success?: boolean };
  expect(payload.success).toBeFalsy();
});
