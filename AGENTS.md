# Porto-2026 - Portfolio Website

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## Project Structure
```
src/
  app/          → Pages & layouts (App Router)
  components/   → Reusable UI components
  lib/          → Utility functions & helpers
public/         → Static assets (images, icons, etc.)
```

## Conventions
- Use `@/*` import alias for `src/` directory
- React Server Components by default; add `'use client'` only when client interactivity is needed
- Tailwind utility classes for all styling
- Semantic HTML with accessibility in mind
- Component files use PascalCase (e.g., `HeroSection.tsx`)
- Utility files use camelCase (e.g., `formatDate.ts`)

## Commands
- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
