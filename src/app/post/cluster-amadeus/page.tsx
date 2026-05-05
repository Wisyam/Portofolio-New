import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wisyam.site";

const WA_NUMBER = "6282169101363";
const WA_DISPLAY = "082169101363";

const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo, saya tertarik dengan properti Cluster Amadeus Rancamaya / Arco Sawangan.",
)}`;

const mp4Highlights = [
  "Dijual cepat sampai jadi!",
  "Cluster Amadeus, Rancamaya Golf Estate",
  "Luas lahan: 84 m²",
  "Luas bangunan: 62 m²",
  "Rumah 2 lantai",
  "Kamar tidur 3 — kamar mandi 2",
  "Carport",
  "SHM",
  "Atap: beton — dinding: bata",
  "Lantai & pondasi: homogeneous tile & pancang",
  "Canopy",
  "Smart sistem — CCTV",
  "Listrik 2200 watt (token)",
  "One gate system",
  "View pegunungan dan golf — udara sejuk dan segar",
  "Harga netto 1,35 M",
];

const pagePath = "/post/cluster-amadeus";
const canonicalUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Dijual — Cluster Amadeus Rancamaya | Arco Sawangan",
  description:
    "Rumah Cluster Amadeus Rancamaya Golf Estate & info Komplek Arco Sawangan Sawangan. Hubungi WhatsApp 082169101363.",
  keywords: [
    "dijual rumah Rancamaya",
    "Cluster Amadeus",
    "Rancamaya Golf Estate",
    "Arco Sawangan",
    "rumah 2 lantai Bogor",
    "SHM",
    "properti golf view",
  ],
  alternates: {
    canonical: pagePath,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "article",
    locale: "id_ID",
    title: "Dijual — Cluster Amadeus Rancamaya",
    description:
      "Rumah 2 lantai, SHM, smart home & view golf. Harga netto 1,35 M. WA: 082169101363",
    url: canonicalUrl,
    siteName: "Wisyam Zain Amanullah - Portfolio",
    images: [
      {
        url: "/post/cluster-amadeus/photo.jpeg",
        width: 1200,
        height: 900,
        alt: "Properti Cluster Amadeus Rancamaya Golf Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dijual — Cluster Amadeus Rancamaya",
    description:
      "Rumah 2 lantai SHM, view golf & pegunungan. Netto 1,35 M. WA 082169101363",
    images: [`${siteUrl}/post/cluster-amadeus/photo.jpeg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Cluster Amadeus — Rancamaya Golf Estate",
  description:
    "Rumah 2 lantai dijual, luas tanah 84 m², bangunan 62 m², 3 kamar tidur, SHM, smart home, view golf.",
  url: canonicalUrl,
  image: `${siteUrl}/post/cluster-amadeus/photo.jpeg`,
  offers: {
    "@type": "Offer",
    price: "1350000000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
};

export default function ClusterAmadeusListingPage() {
  return (
    <div className="relative z-[2] min-h-screen bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <header className="border-b border-border bg-bg-secondary px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="text-xs text-accent-cyan hover:underline sm:text-sm"
          >
            ← Kembali ke portfolio
          </Link>
          <span className="font-[family-name:var(--font-pixel)] text-[7px] text-accent-green sm:text-[8px]">
            LISTING
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-10 px-4 py-8 sm:px-6">
        <section className="space-y-4">
          <h1 className="font-[family-name:var(--font-retro)] text-2xl leading-tight text-accent-green sm:text-3xl">
            Cluster Amadeus, Rancamaya Golf Estate
          </h1>
          <p className="text-sm text-text-secondary">
            Kontak hanya WhatsApp:{" "}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan underline decoration-dotted underline-offset-4 hover:text-accent-green"
            >
              {WA_DISPLAY}
            </a>
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border border-accent-green bg-bg-tertiary px-4 py-2.5 text-sm font-medium text-accent-green transition hover:bg-accent-green/10"
          >
            Chat WhatsApp
          </a>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-text-muted">
            Video
          </h2>
          <video
            className="w-full rounded border border-border bg-black"
            controls
            playsInline
            preload="metadata"
            poster="/post/cluster-amadeus/photo.jpeg"
          >
            <source src="/post/cluster-amadeus/tour.mp4" type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-text-secondary">
            {mp4Highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-text-muted">
            Foto &amp; listing lain
          </h2>
          <div className="overflow-hidden rounded border border-border">
            <Image
              src="/post/cluster-amadeus/photo.jpeg"
              alt="Foto properti Rancamaya / Arco Sawangan"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="rounded border border-border bg-bg-secondary p-4 text-sm leading-relaxed text-text-primary">
            <p>
              Komplek Arco Sawangan dijual, harga di bawah NJOP{" "}
              <span className="text-accent-yellow">1,8 M</span>. Hubungi WA:{" "}
              <a
                href={waHref}
                className="text-accent-cyan underline underline-offset-2"
              >
                {WA_DISPLAY}
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest text-text-muted">
            Brosur PDF
          </h2>
          <a
            href="/post/cluster-amadeus/brosur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm text-accent-cyan underline underline-offset-4 hover:text-accent-green"
          >
            Unduh Villa — brosur PDF
          </a>
        </section>

        <section className="border-t border-border pt-8 text-center text-xs text-text-muted">
          <p>{new URL(siteUrl).host}</p>
        </section>
      </main>
    </div>
  );
}
