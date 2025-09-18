import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NoiseBackground from '@/components/NoiseBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wisyam Zain Amanullah - Fullstack Developer',
  description: 'A professional and modern portfolio website for a fullstack developer, featuring a clean design, smooth animations, and detailed project showcases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-brand-text-light`}>
        <NoiseBackground />
        {children}
      </body>
    </html>
  );
}
