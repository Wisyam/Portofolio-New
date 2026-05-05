"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          lineNum="120"
          comment="// get in touch"
          title="$ ./contact.sh"
        />

        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-bg-tertiary px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="flex-1 text-center text-xs text-text-secondary">
                wisyam@contact:~
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <span className="text-accent-green">$</span>
                      <span className="text-text-secondary">
                        enter your name:
                      </span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary font-[family-name:var(--font-mono)] text-sm focus:outline-none focus:border-accent-green transition-colors placeholder:text-text-muted"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <span className="text-accent-green">$</span>
                      <span className="text-text-secondary">
                        enter your email:
                      </span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary font-[family-name:var(--font-mono)] text-sm focus:outline-none focus:border-accent-green transition-colors placeholder:text-text-muted"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <span className="text-accent-green">$</span>
                      <span className="text-text-secondary">
                        enter your message:
                      </span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary font-[family-name:var(--font-mono)] text-sm focus:outline-none focus:border-accent-green transition-colors resize-none placeholder:text-text-muted"
                      placeholder="Hello, I'd like to work together..."
                    />
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="absolute opacity-0 h-0 w-0 pointer-events-none"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {error && (
                    <p className="text-accent-red text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="px-6 py-3 font-[family-name:var(--font-mono)] text-sm border border-accent-green bg-accent-green/10 text-accent-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "$ sending..." : "$ send-mail --submit"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <p className="text-accent-green text-sm">
                    &#10003; Message sent successfully!
                  </p>
                  <p className="text-text-muted text-xs">
                    {`$ echo "Thanks! I'll get back to you soon."`}
                  </p>
                </div>
              )}

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border space-y-2 text-xs">
                <p className="text-text-muted mb-3">
                  {"// or reach me via:"}
                </p>
                <a
                  href="https://github.com/Wisyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-green hover:underline"
                >
                  <span className="text-text-muted">$</span> open
                  github.com/Wisyam
                </a>
                <a
                  href="https://www.linkedin.com/in/wisyam-zain-amanullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-green hover:underline"
                >
                  <span className="text-text-muted">$</span> open
                  linkedin.com/in/wisyam-zain-amanullah
                </a>
                <a
                  href="https://instagram.com/wyscamx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-green hover:underline"
                >
                  <span className="text-text-muted">$</span> open
                  instagram.com/@wyscamx
                </a>
                <a
                  href="tel:+6283831973277"
                  className="flex items-center gap-2 text-accent-green hover:underline"
                >
                  <span className="text-text-muted">$</span> call
                  +62 838 3197 3277
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
