"use client";

import { useEffect, useState } from "react";

interface Pixel {
  id: number;
  char: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const pixelChars = [
  "{",
  "}",
  "<",
  ">",
  "/",
  ";",
  "(",
  ")",
  "=",
  "//",
  "=>",
  "[]",
  "::",
  "&&",
  "||",
  "!=",
  "++",
  "--",
  "**",
  "0",
  "1",
];

const colors = [
  "text-accent-green",
  "text-accent-blue",
  "text-accent-purple",
  "text-accent-cyan",
  "text-accent-yellow",
];

function generatePixels(count: number): Pixel[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    char: pixelChars[Math.floor(Math.random() * pixelChars.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 10 + Math.random() * 14,
    opacity: 0.04 + Math.random() * 0.1,
    speed: 15 + Math.random() * 30,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

export default function FloatingPixels() {
  const [pixels] = useState<Pixel[]>(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return generatePixels(12);
    }
    return generatePixels(30);
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {pixels.map((p) => (
        <span
          key={p.id}
          className={`absolute font-[family-name:var(--font-mono)] select-none ${p.color}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            transform: `translateY(${scrollY * (p.speed / 100) * -0.3}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
