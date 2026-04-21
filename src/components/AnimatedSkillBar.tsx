"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSkillBarProps {
  name: string;
  level: number;
  color: string;
}

export default function AnimatedSkillBar({
  name,
  level,
  color,
}: AnimatedSkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = Math.round(level / 5);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCurrentLevel(current);
      if (current >= target) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible, level]);

  const filled = currentLevel;
  const total = 20;
  const empty = total - filled;
  const percent = isVisible ? Math.round((currentLevel / total) * 100) : 0;

  return (
    <div ref={ref} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
      <span className={`${color} w-20 sm:w-32 shrink-0 truncate`}>
        {name}
      </span>
      {/* Block bar - hidden on very small, show CSS bar instead */}
      <span className="font-[family-name:var(--font-mono)] hidden sm:inline">
        <span
          className="text-accent-green"
          style={{
            textShadow: isVisible
              ? "0 0 8px rgba(0,255,65,0.4)"
              : "none",
          }}
        >
          {"█".repeat(filled)}
        </span>
        <span className="text-text-muted">{"░".repeat(empty)}</span>
      </span>
      {/* CSS progress bar for mobile */}
      <div className="flex-1 h-2 bg-text-muted/20 rounded-sm overflow-hidden sm:hidden">
        <div
          className="h-full bg-accent-green rounded-sm transition-all duration-500"
          style={{
            width: `${percent}%`,
            boxShadow: isVisible
              ? "0 0 8px rgba(0,255,65,0.4)"
              : "none",
          }}
        />
      </div>
      <span className="text-text-secondary text-[10px] sm:text-[11px] w-8 sm:w-10 text-right tabular-nums shrink-0">
        {percent}%
      </span>
    </div>
  );
}
