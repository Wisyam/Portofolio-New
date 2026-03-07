'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/types/index';
import AnimatedSection from '@/components/common/AnimatedSection';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const applyTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `rotateY(${targetRef.current.rotateY}deg) rotateX(${targetRef.current.rotateX}deg)`;
    rafRef.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
      return;
    }

    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!card || !wrapper) return;

    const { left, top, width, height } = wrapper.getBoundingClientRect();
    const normalizedX = ((e.clientX - left) / width - 0.5) * 2;
    const normalizedY = ((e.clientY - top) / height - 0.5) * 2;
    const maxTilt = 7;

    card.style.transition = 'none';
    targetRef.current.rotateY = normalizedX * maxTilt;
    targetRef.current.rotateX = -normalizedY * maxTilt;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(applyTilt);
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    targetRef.current.rotateY = 0;
    targetRef.current.rotateX = 0;
    card.style.transition = 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div ref={wrapperRef} className="card-3d">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-3d-inner bg-brand-bg-secondary rounded-lg overflow-hidden h-full flex flex-col group relative border border-brand-border/50 will-change-transform"
      >
        <div className="overflow-hidden h-64">
          <Image src={project.imageUrl} alt={project.title} width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>
        <div className="p-6 flex-grow flex flex-col relative z-10">
          <span className="text-sm font-semibold text-brand-accent mb-1">{project.category}</span>
          <h3 className="text-2xl font-bold text-brand-text-light font-sans mb-3 transition-all duration-300 group-hover:text-shadow-glow-neon">{project.title}</h3>
          <p className="font-sans text-brand-text-light/80 mb-4 flex-grow text-sm leading-relaxed opacity-100 group-hover:opacity-100 transition-opacity duration-300">
            {project.solution}
          </p>
          <div className="mt-auto pt-4 border-t border-brand-border/50">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="bg-brand-bg-dark text-brand-accent text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section id="projects" className="py-24 bg-brand-bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-brand-text-heading font-sans mb-12">Featured Projects</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={index}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
