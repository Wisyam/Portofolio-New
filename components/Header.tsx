'use client';
import React, { useState, useEffect } from 'react';
import { NavLink } from '@/types';

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

export default Header;
