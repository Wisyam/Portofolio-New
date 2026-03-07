'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('sending');
    setFeedback('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      company: String(formData.get('company') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setSubmitState('error');
        setFeedback(result.message || 'Failed to send message. Please try again.');
        return;
      }

      setSubmitState('success');
      setFeedback(result.message || 'Message sent successfully.');
      form.reset();
    } catch {
      setSubmitState('error');
      setFeedback('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg-secondary">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-brand-text-light mb-8">Open to collaboration, freelance, and full-time opportunities.</p>
        </AnimatedSection>

        <AnimatedSection className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <a href="mailto:wisyamamanullah@gmail.com" className="bg-brand-border/30 border border-brand-border rounded-md p-3 hover:border-brand-accent transition-colors">wisyamamanullah@gmail.com</a>
            <a href="https://www.linkedin.com/in/wisyam-zain-amanullah" target="_blank" rel="noopener noreferrer" className="bg-brand-border/30 border border-brand-border rounded-md p-3 hover:border-brand-accent transition-colors">linkedin.com/in/wisyam-zain-amanullah</a>
            <a href="https://github.com/Wisyam" target="_blank" rel="noopener noreferrer" className="bg-brand-border/30 border border-brand-border rounded-md p-3 hover:border-brand-accent transition-colors">github.com/Wisyam</a>
            <div className="bg-brand-border/30 border border-brand-border rounded-md p-3">Malang, Indonesia</div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
              />
            </div>

            <div>
              <input type="text" name="name" placeholder="Your Name" required minLength={2} maxLength={120} className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Your Email" required maxLength={180} className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
            </div>
            <div>
              <textarea name="message" placeholder="Your Message" rows={5} required minLength={10} maxLength={4000} className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="group relative inline-block text-sm font-medium text-brand-bg-dark focus:outline-none focus:ring disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 border border-brand-accent rounded-md"></span>
                <span className="block border border-brand-accent rounded-md bg-brand-accent px-12 py-3 transition-transform active:border-brand-accent/70 active:bg-brand-accent/70 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  {submitState === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </div>
            {feedback && (
              <p className={`text-center mt-4 ${submitState === 'error' ? 'text-red-400' : 'text-brand-accent'}`}>
                {feedback}
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
