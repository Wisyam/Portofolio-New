'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Project, Testimonial, Skill, NavLink } from '../types';
import * as Icons from '../components/icons';

// SECTION: CUSTOM HOOKS
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const useTypewriter = (text: string, speed = 30, start = true) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!start) return;
    setDisplayText(''); // Reset on text or start change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return displayText;
};

// SECTION: REUSABLE COMPONENTS
const NoiseBackground = () => <div className="noise-overlay"></div>;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};


// SECTION: COMPONENT DEFINITIONS

// HEADER
const Header: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-brand-text-light font-bold text-2xl font-sans tracking-wider" style={{ textShadow: '0 0 8px rgba(143, 155, 147, 0.4)' }}>WZ.</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-text-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" download="WisyamZain-Resume.pdf" className="inline-block border border-brand-accent text-brand-accent font-medium text-sm py-2 px-4 rounded-md hover:bg-brand-accent hover:text-brand-bg-dark transition-all duration-300 transform hover:scale-105">
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

// HERO
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
                        Hi, I’m Wisyam — Fullstack Developer & Problem Solver
                    </h1>
                    <p className="text-lg md:text-xl text-brand-text-heading font-sans mb-8">
                        Mengembangkan solusi web modern dengan React, Node.js, dan AI untuk problem solving yang lebih cerdas.
                    </p>
                    <a href="#projects" className="inline-block bg-brand-bg-secondary text-brand-text-light font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-bg-dark hover:shadow-glow-hover transition-all duration-300 shadow-glow transform hover:scale-105 active:scale-95">
                        View My Work
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
};

// ABOUT
const About: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <section id="about" className="py-24 bg-brand-bg-secondary">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <Image src="https://picsum.photos/seed/portrait/500/500?grayscale" alt="Wisyam Zain Amanullah" width={500} height={500} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-6">About Me</h2>
            <p className="text-lg text-brand-text-light font-sans leading-relaxed mb-6">
              Fullstack Developer asal Malang. Berpengalaman di frontend, backend, dan UI/UX. Aktif sebagai Fullstack Developer serta pernah magang sebagai Backend Intern di PT Lanius Inovasi Indonesia. Terbiasa menggunakan AI (seperti ChatGPT) untuk mempercepat problem-solving.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.slice(0, 6).map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2 bg-brand-border/50 p-2 rounded-md transition-all duration-300 hover:shadow-glow hover:border-brand-accent/50 border border-transparent">
                  <div className="w-6 h-6 text-brand-accent">{skill.icon}</div>
                  <span className="text-brand-text-light text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
);

// PROJECTS
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
          <div className="overflow-hidden h-64">
            <Image src={project.imageUrl} alt={project.title} width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
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


// ACHIEVEMENTS
const Achievements: React.FC<{ achievements: Testimonial[] }> = ({ achievements }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const currentQuote = useTypewriter(achievements[currentIndex].quote, 30, isTyping);

    useEffect(() => {
        setIsTyping(false); // Stop previous typing
        const transitionTimer = setTimeout(() => setIsTyping(true), 100); // Start new typing after a short delay

        const slideTimer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        }, 8000); 

        return () => {
          clearTimeout(transitionTimer);
          clearTimeout(slideTimer);
        }
    }, [currentIndex, achievements.length]);

    return (
        <section id="achievements" className="py-24 bg-brand-bg-secondary">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-4xl font-bold text-center text-brand-text-heading font-sans mb-12">Certifications & Achievements</h2>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-brand-bg-dark p-8 rounded-lg border-l-4 border-brand-accent shadow-lg min-h-[220px]">
                        <p className="text-lg font-sans text-brand-text-light mb-4 min-h-[96px]">"{currentQuote}"</p>
                        <footer className="text-right">
                            <p className="font-bold text-brand-text-light/90 font-sans">{achievements[currentIndex].name}</p>
                            <p className="text-sm text-brand-accent/80">{achievements[currentIndex].title}</p>
                        </footer>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

// SKILLS
const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <section id="skills" className="py-24 bg-brand-bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center text-brand-text-heading font-sans mb-12">My Tech Stack</h2>
            </AnimatedSection>
            <AnimatedSection>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="text-brand-text-light w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(143,155,147,0.5)]">
                                {skill.icon}
                            </div>
                            <p className="mt-2 text-sm text-brand-text-light/80 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
    </section>
);

// CONTACT
const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock form submission
        setTimeout(() => {
            setStatus('Message sent successfully!');
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-brand-bg-secondary">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-4">Let’s Build Something Together</h2>
                    <p className="text-brand-text-light mb-8">Have a project in mind? I'd love to hear about it.</p>
                </AnimatedSection>
                <AnimatedSection>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300" />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-brand-border/30 border border-brand-border text-brand-text-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all duration-300"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="group relative inline-block text-sm font-medium text-brand-bg-dark focus:outline-none focus:ring">
                                <span className="absolute inset-0 border border-brand-accent rounded-md"></span>
                                <span className="block border border-brand-accent rounded-md bg-brand-accent px-12 py-3 transition-transform active:border-brand-accent/70 active:bg-brand-accent/70 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                    Send Message
                                </span>
                            </button>
                        </div>
                        {status && <p className="text-center mt-4 text-brand-accent">{status}</p>}
                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

// FOOTER
const Footer: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => (
    <footer className="bg-brand-bg-dark py-8 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-text-heading/60">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm">&copy; {new Date().getFullYear()} Wisyam Zain Amanullah. All Rights Reserved.</div>
                <div className="hidden md:flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a href="https://github.com/Wisyam" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(143,155,147,0.5)]"><Icons.GitHubIcon /></a>
                  <a href="https://linkedin.com/in/wisyam" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(143,155,147,0.5)]"><Icons.LinkedInIcon /></a>
                </div>
            </div>
        </div>
    </footer>
);

// SECTION: DATA
const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const projectsData: Project[] = [
    {
        title: 'Diesnatalis Management System',
        category: 'Fullstack Web App (2023 – Present)',
        imageUrl: 'https://picsum.photos/800/600?random=1',
        problem: '',
        solution: 'Fullstack web untuk manajemen keuangan acara Diesnatalis SMK Telkom Malang. Fitur: UI/UX kasir/admin, koordinasi dengan pembimbing, deploy ke production.',
        result: '',
        tech: ['React', 'Node.js', 'UI/UX Design', 'Production Deploy']
    },
    {
        title: 'Mobigo Car Rental App',
        category: 'Web Application (2024)',
        imageUrl: 'https://picsum.photos/800/600?random=2',
        problem: '',
        solution: 'Aplikasi rental mobil berbasis web. Peran: Frontend, Backend, UI/UX Designer, dan mentor tim. Fitur: autentikasi, transaksi sewa, dashboard admin.',
        result: '',
        tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'Team Mentorship']
    },
    {
        title: 'Backend Intern – PT Lanius Inovasi',
        category: 'Backend Development (2024 – 2025)',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        problem: '',
        solution: 'Membuat query Hopscotch DB, tabel backend, integrasi & testing. Mendukung tim untuk stabilitas sistem produksi.',
        result: '',
        tech: ['Hopscotch DB', 'Backend', 'Integration', 'Testing']
    },
    {
        title: 'Game Development & Server Projects',
        category: 'Game Development (2020 – 2025)',
        imageUrl: 'https://picsum.photos/800/600?random=4',
        problem: '',
        solution: 'Membuat sistem dasar game, mengembangkan server privat, balancing gameplay, serta membuat dan menjual 3D model dengan Blender.',
        result: '',
        tech: ['Game Logic', 'Server Management', 'Blender', '3D Modeling']
    }
];

const achievementsData: Testimonial[] = [
    {
        quote: "Completed the React Developer learning path, mastering fundamental and advanced concepts of React for building modern web applications.",
        name: 'React Developer Certification',
        title: 'Dicoding (2023)'
    },
    {
        quote: "Underwent intensive training focused on backend development principles and practices within a professional environment.",
        name: 'Backend Developer Training',
        title: 'LaniusMV (2025)'
    },
    {
        quote: "Finished a comprehensive course covering the full stack of web development technologies from front-end to back-end.",
        name: 'Course Fullstack Developer',
        title: 'CODEPOLITAN (2025)'
    }
];

const skillsData: Skill[] = [
    { name: 'React', icon: <Icons.ReactIcon /> },
    { name: 'Next.js', icon: <Icons.NextJSIcon /> },
    { name: 'Tailwind CSS', icon: <Icons.TailwindCSSIcon /> },
    { name: 'Node.js', icon: <Icons.NodeJSIcon /> },
    { name: 'Express.js', icon: <Icons.ExpressJSIcon /> },
    { name: 'MySQL', icon: <Icons.MySQLIcon /> },
    { name: 'Sequelize', icon: <Icons.SequelizeIcon /> },
    { name: 'GitHub', icon: <Icons.GitHubIcon className="w-full h-full" /> },
    { name: 'Figma', icon: <Icons.FigmaIcon /> },
    { name: 'Trello', icon: <Icons.TrelloIcon /> },
    { name: 'Hopscotch DB', icon: <Icons.HopscotchDBIcon />},
    { name: 'AI Problem Solving', icon: <Icons.ProblemSolvingIcon /> },
];

// SECTION: MAIN APP COMPONENT

export default function Home() {
  return (
    <>
      <Head>
        <title>Wisyam Zain Amanullah - Fullstack Developer</title>
        <meta name="description" content="A professional and modern portfolio website for a fullstack developer, featuring a clean design, smooth animations, and detailed project showcases." />
      </Head>
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
    </>
  );
}
