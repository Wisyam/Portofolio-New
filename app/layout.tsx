import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ChatbotWidget from '@/components/chatbot/ChatbotScript';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wisyam-portfolio.vercel.app';
const siteName = 'Wisyam Zain Amanullah - Portfolio';
const description =
  'Full-stack Developer at Apique Group and Informatics undergraduate building modern web applications with React, Next.js, Node.js, and scalable backend workflows.';
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wisyam Zain Amanullah',
  url: siteUrl,
  jobTitle: 'Full-stack Developer',
  sameAs: [
    'https://github.com/Wisyam',
    'https://www.linkedin.com/in/wisyam-zain-amanullah',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  keywords: ['Full-stack Developer', 'Portfolio', 'React', 'Next.js', 'Node.js', 'Web Developer'],
  authors: [{ name: 'Wisyam Zain Amanullah' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteName,
    description,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Wisyam Zain Amanullah Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google7997e88257377c4e',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans text-brand-text-light antialiased">
        <Analytics />
        <SpeedInsights />
        <ChatbotWidget />
        {children}
      </body>
    </html>
  );
}
