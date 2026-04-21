"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const chars =
      "01{}[]()<>;:=/\\|!@#$%^&*~`abcdefghijklmnopqrstuvwxyz";
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.random() * -100
      );
    };

    const draw = () => {
      ctx.fillStyle = "rgba(13, 17, 23, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character — bright green
        ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y);

        // Trail — dimmer
        if (drops[i] > 1) {
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = "rgba(0, 255, 65, 0.15)";
          ctx.fillText(trailChar, x, y - fontSize * 2);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      aria-hidden="true"
    />
  );
}
