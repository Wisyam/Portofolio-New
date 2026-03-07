'use client';

import Link from 'next/link';
import { useMousePosition } from '@/hooks/useMousePosition';
import AnimatedSection from '@/components/common/AnimatedSection';

const Hero: React.FC = () => {
  const { x, y } = useMousePosition();
  const floatingElementStyle = (factor: number) => ({
    transform: `translate(${x / factor}px, ${y / factor}px)`,
    transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1)',
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden animated-gradient">
      <div style={floatingElementStyle(50)} className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-accent/5 rounded-full filter blur-xl"></div>
      <div style={floatingElementStyle(-70)} className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-text-heading/5 rounded-full filter blur-2xl"></div>
      <div style={floatingElementStyle(30)} className="absolute bottom-1/2 right-1/3 w-24 h-24 border-2 border-brand-border/20 rounded-full"></div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text-light font-sans leading-tight mb-4 animate-pulse-glow">
            Wisyam Zain Amanullah
          </h1>
          <p className="text-lg md:text-xl text-brand-text-heading font-sans mb-8">
            Full-stack Developer at Apique Group and Informatics undergraduate at Universitas Ciputra Surabaya, building modern web applications with React, Next.js, Node.js, and scalable backend workflows.
          </p>
          <Link href="#projects" className="inline-block bg-brand-bg-secondary text-brand-text-light font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-bg-dark hover:shadow-glow-hover transition-all duration-300 shadow-glow transform hover:scale-105 active:scale-95">
            View My Work
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
