# wisyam.site — Personal Portfolio

A developer portfolio website with a terminal/IDE-inspired aesthetic, built with modern web technologies.

**Live:** [wisyam.site](https://wisyam.site)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

## Features

- **Terminal/IDE Theme** — Dark phosphor aesthetic with VS Code-style tab navigation and status bar
- **Interactive Background** — Animated dot grid with mouse interaction + floating code symbols with parallax
- **Typing Effect** — Sequential terminal boot sequence on hero section
- **Neofetch Skills** — System info-style skill display with animated progress bars
- **Git Log Timeline** — Work experience as git commits with glowing timeline
- **Changelog Education** — Education history styled as semantic versioning
- **Contact API** — Server-side email via Resend with rate limiting and honeypot spam protection
- **SEO Optimized** — Open Graph, JSON-LD, sitemap, robots.txt, Google Search Console verified
- **Responsive** — Adaptive layouts for mobile, tablet, and desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | JetBrains Mono, Press Start 2P, VT323 |
| Email | Resend |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Pages, layouts, API routes
│   ├── api/contact/  # Contact form endpoint
│   ├── layout.tsx    # Root layout with SEO metadata
│   ├── page.tsx      # Home page
│   ├── robots.ts     # Dynamic robots.txt
│   └── sitemap.ts    # Dynamic sitemap.xml
├── components/       # UI components
│   ├── TabBar.tsx          # IDE tab navigation
│   ├── StatusBar.tsx       # VS Code status bar
│   ├── HeroSection.tsx     # Terminal boot sequence
│   ├── SkillsSection.tsx   # Neofetch system info
│   ├── ProjectsSection.tsx # File explorer cards
│   ├── ExperienceSection.tsx # Git log timeline
│   ├── EducationSection.tsx  # Changelog entries
│   ├── ContactSection.tsx    # Terminal form
│   ├── DotGrid.tsx         # Interactive dot background
│   ├── FloatingPixels.tsx  # Parallax code symbols
│   └── ...
└── lib/              # Utilities
```

## Author

**Wisyam Zain Amanullah** — Full-Stack Developer

- [wisyam.site](https://wisyam.site)
- [GitHub](https://github.com/Wisyam)
- [LinkedIn](https://www.linkedin.com/in/wisyam-zain-amanullah)
