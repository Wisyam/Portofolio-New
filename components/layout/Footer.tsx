import Link from 'next/link';
// Fix: Updated import path to resolve module ambiguity.
import { NavLink } from '@/types/index';
// Fix: Updated import path to resolve module ambiguity.
import * as Icons from '@/components/icons/index';

interface FooterProps {
    navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ navLinks }) => (
    <footer className="bg-brand-bg-dark py-8 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-text-heading/60">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm">&copy; {new Date().getFullYear()} Wisyam Zain Amanullah. All Rights Reserved.</div>
                <div className="hidden md:flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                      {link.label}
                    </Link>
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

export default Footer;