'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types/index';

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-brand-text-light font-bold text-2xl font-sans tracking-wider" style={{ textShadow: '0 0 8px rgba(143, 155, 147, 0.4)' }}>
              WZ.
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-text-light hover:text-brand-accent hover:bg-brand-border/30 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-text-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            <a href="/CV_Wisyam.docx" download="CV_Wisyam_Zain_Amanullah.docx" className="inline-block border border-brand-accent text-brand-accent font-medium text-sm py-2 px-4 rounded-md hover:bg-brand-accent hover:text-brand-bg-dark transition-all duration-300 transform hover:scale-105">
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close mobile menu backdrop"
            className="fixed inset-0 top-20 bg-black/50 md:hidden"
            onClick={closeMobileMenu}
          />

          <div id="mobile-menu-panel" className="md:hidden absolute top-20 left-0 right-0 bg-brand-bg-dark border-t border-brand-border shadow-xl px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block text-brand-text-light hover:text-brand-accent px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/CV_Wisyam.docx"
              download="CV_Wisyam_Zain_Amanullah.docx"
              onClick={closeMobileMenu}
              className="block mt-3 border border-brand-accent text-brand-accent font-medium text-sm py-2 px-4 rounded-md hover:bg-brand-accent hover:text-brand-bg-dark transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
