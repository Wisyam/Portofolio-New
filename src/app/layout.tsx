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
const origin = new URL(siteUrl);

const personName = "Wisyam Zain Amanullah";
const siteName = `${personName} - Portfolio`;

const descriptionPrimary =
  "Full-stack developer in Malang, Indonesia—building scalable web apps with React, Next.js, TypeScript, Node.js & Laravel at Apique Group. Informatics student; portfolio, skills, projects, and contact.";

const canonicalPath = "/";
const ogImageAlt = `${personName} — developer portfolio`;

const keywords = Array.from(
  new Set([
    personName,
    "Wisyam",
    "Wisyam Portfolio",
    "portfolio developer Indonesia",
    "Full-stack Developer",
    "Software Engineer",
    "Web Developer",
    "pengembang web",
    "pengembang full-stack",
    "Malang Indonesia",
    "Apique Group",
    "Wisyam Telkom",
    "Wisyam Ciputra University",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "PHP",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "REST API",
    "backend development",
    "GitHub",
    "informatics undergraduate",
    "mahasiswa informatika",
    "responsive web apps",
    "terminal UI portfolio",
    "developer portfolio Next.js",
  ]),
);

const personSchemaId = `${origin.origin}/#person`;
const websiteSchemaId = `${origin.origin}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personSchemaId,
      name: personName,
      url: origin.origin,
      image: `${origin.origin}/og-image.svg`,
      jobTitle: "Full-stack Developer",
      description: descriptionPrimary,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malang",
        addressRegion: "East Java",
        addressCountry: "ID",
      },
      worksFor: {
        "@type": "Organization",
        name: "Apique Group",
      },
      knowsAbout: [
        "React (JavaScript library)",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Laravel",
        "Web accessibility",
        "REST API design",
        "Responsive web development",
      ],
      sameAs: [
        "https://github.com/Wisyam",
        "https://www.linkedin.com/in/wisyam-zain-amanullah",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteSchemaId,
      url: origin.origin,
      name: siteName,
      description: descriptionPrimary,
      inLanguage: ["en-US", "id-ID"],
      publisher: { "@id": personSchemaId },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: origin,
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s · ${personName}`,
  },
  description: descriptionPrimary,
  keywords,
  authors: [{ name: personName, url: origin.origin }],
  creator: personName,
  publisher: personName,
  category: "technology",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "en-US": canonicalPath,
      "id-ID": canonicalPath,
    },
  },
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    title: siteName,
    description: descriptionPrimary,
    url: canonicalPath,
    siteName,
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: descriptionPrimary,
    images: ["/og-image.svg"],
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
