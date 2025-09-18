'use client';
import React, { useRef } from 'react';
import { Project } from '@/lib/types';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
  
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
  
      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
  
    const handleMouseLeave = () => {
      const card = cardRef.current;
      if (card) card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
  
    return (
      <div className="card-3d">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="card-3d-inner bg-brand-bg-secondary rounded-lg overflow-hidden h-full flex flex-col group relative border border-brand-border/50"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-sm"></div>
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

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
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
