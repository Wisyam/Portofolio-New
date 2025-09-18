'use client';
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock form submission
        setTimeout(() => {
            setStatus('Message sent successfully!');
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-brand-bg-secondary">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-4">Let’s Build Something Together</h2>
                    <p className="text-brand-text-light mb-8">Have a project in mind? I'd love to hear about it.</p>
                </AnimatedSection>
                <AnimatedSection>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="group relative inline-block text-sm font-medium text-brand-bg-dark focus:outline-none focus:ring">
                                <span className="absolute inset-0 border border-brand-accent rounded-md"></span>
                                <span className="block border border-brand-accent rounded-md bg-brand-accent px-12 py-3 transition-transform active:border-brand-accent/70 active:bg-brand-accent/70 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                    Send Message
                                </span>
                            </button>
                        </div>
                        {status && <p className="text-center mt-4 text-brand-accent">{status}</p>}
                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Contact;
