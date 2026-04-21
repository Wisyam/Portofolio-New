"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [displayed, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 h-[1.1em] bg-accent-green animate-blink align-middle ml-0.5" />
    </span>
  );
}
