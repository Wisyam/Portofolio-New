import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatbotWidget from '@/components/chatbot/ChatbotScript';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wisyam Zain Amanullah - Fullstack Developer',
  description: 'A professional and modern portfolio website for a fullstack developer, featuring a clean design, smooth animations, and detailed project showcases.',
  keywords: ['Fullstack Developer', 'Portfolio', 'React', 'Next.js', 'Web Developer'],
  authors: [{ name: 'Wisyam Zain Amanullah' }],
  openGraph: {
    title: 'Wisyam Zain Amanullah - Fullstack Developer',
    description: 'A professional and modern portfolio website for a fullstack developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-brand-text-light antialiased">
        <Analytics />
        <SpeedInsights />
        <ChatbotWidget />
        {children}
      </body>
    </html>
  );
}
