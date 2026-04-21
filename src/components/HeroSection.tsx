"use client";

import { useState } from "react";
import TypingEffect from "./TypingEffect";
export default function HeroSection() {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);
  const [line3Done, setLine3Done] = useState(false);
  const [line4Done, setLine4Done] = useState(false);
  const [line5Done, setLine5Done] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-10 relative overflow-hidden"
    >
      <div className="max-w-3xl w-full relative z-10">
        {/* Terminal Window */}
        <div className="bg-bg-secondary border border-border rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-bg-tertiary px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex-1 text-center text-xs text-text-secondary">
              wisyam@dev:~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 text-xs sm:text-sm leading-7 sm:leading-8 font-[family-name:var(--font-mono)] break-words overflow-hidden">
            <div className="flex gap-2">
              <span className="text-accent-green">$</span>
              <TypingEffect
                text="cat about.txt"
                speed={60}
                onComplete={() => setLine1Done(true)}
              />
            </div>

            {line1Done && (
              <div className="mt-4 space-y-1">
                <div className="flex gap-2">
                  <span className="text-text-muted">1</span>
                  <TypingEffect
                    text='name: "Wisyam Zain Amanullah"'
                    speed={30}
                    className="text-accent-orange"
                    onComplete={() => setLine2Done(true)}
                  />
                </div>

                {line2Done && (
                  <div className="flex gap-2">
                    <span className="text-text-muted">2</span>
                    <TypingEffect
                      text='role: "Full-Stack Developer"'
                      speed={30}
                      className="text-accent-cyan"
                      onComplete={() => setLine3Done(true)}
                    />
                  </div>
                )}

                {line3Done && (
                  <div className="flex gap-2">
                    <span className="text-text-muted">3</span>
                    <TypingEffect
                      text='location: "Malang, Indonesia"'
                      speed={30}
                      className="text-accent-purple"
                      onComplete={() => setLine4Done(true)}
                    />
                  </div>
                )}

                {line4Done && (
                  <div className="flex gap-2">
                    <span className="text-text-muted">4</span>
                    <TypingEffect
                      text='passion: "Building scalable & high-quality web solutions"'
                      speed={30}
                      className="text-accent-yellow"
                      onComplete={() => setLine5Done(true)}
                    />
                  </div>
                )}
              </div>
            )}

            {line5Done && (
              <div className="mt-6 flex gap-2">
                <span className="text-accent-green">$</span>
                <span className="text-text-primary">
                  <span className="inline-block w-2 h-4 bg-accent-green animate-blink align-middle" />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ASCII Art */}
        <pre className="mt-6 text-[6px] sm:text-[9px] leading-tight text-accent-green opacity-40 text-center font-[family-name:var(--font-mono)] select-none overflow-hidden hidden sm:block">
{`
 ██╗    ██╗██╗███████╗██╗   ██╗ █████╗ ███╗   ███╗
 ██║    ██║██║██╔════╝╚██╗ ██╔╝██╔══██╗████╗ ████║
 ██║ █╗ ██║██║███████╗ ╚████╔╝ ███████║██╔████╔██║
 ██║███╗██║██║╚════██║  ╚██╔╝  ██╔══██║██║╚██╔╝██║
 ╚███╔███╔╝██║███████║   ██║   ██║  ██║██║ ╚═╝ ██║
  ╚══╝╚══╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
`}
        </pre>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-4 sm:px-6 py-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm border border-accent-green bg-accent-green/10 text-accent-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:text-shadow transition-all animate-glitch w-full sm:w-auto text-center"
          >
            $ view projects.exe
          </a>
          <a
            href="#contact"
            className="px-4 sm:px-6 py-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm border border-border bg-bg-tertiary text-accent-green hover:border-accent-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all animate-glitch w-full sm:w-auto text-center"
          >
            $ open contact.sh
          </a>
        </div>
      </div>
    </section>
  );
}
