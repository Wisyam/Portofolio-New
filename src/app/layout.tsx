import type { Metadata } from "next";
import { JetBrains_Mono, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-retro",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wisyam.site";
const siteName = "Wisyam Zain Amanullah - Portfolio";
const description =
  "Full-stack Developer at Apique Group and Informatics undergraduate building modern web applications with React, Next.js, Node.js, and scalable backend workflows.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wisyam Zain Amanullah",
  url: siteUrl,
  jobTitle: "Full-stack Developer",
  sameAs: [
    "https://github.com/Wisyam",
    "https://www.linkedin.com/in/wisyam-zain-amanullah",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  keywords: [
    "Full-stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Wisyam Zain Amanullah",
  ],
  authors: [{ name: "Wisyam Zain Amanullah" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Wisyam Zain Amanullah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7997e88257377c4e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${pressStart2P.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
