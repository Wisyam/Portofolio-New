import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { navLinks, projectsData, achievementsData, skillsData } from '@/lib/data';

export default function Home() {
  return (
    <>
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
    </>
  );
}
