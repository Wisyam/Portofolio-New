'use client';

import {
  navLinks,
  skillsData,
  projectsData,
  achievementsData,
} from '@/data/portfolioData';

import NoiseBackground from '@/components/common/NoiseBackground';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="font-sans text-brand-text-light">
      <NoiseBackground />
      <Header navLinks={navLinks} />
      <main>
        <Hero />
        <About skills={skillsData} />
        <Projects projects={projectsData} />
        <Achievements achievements={achievementsData} />
        <Skills skills={skillsData} />
        <Contact />
      </main>
      <Footer navLinks={navLinks} />
    </div>
  );
}
