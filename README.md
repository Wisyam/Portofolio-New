# Wisyam Zain Amanullah - Fullstack Developer Portfolio

A modern and professional portfolio website built with Next.js 15 LTS and App Router, featuring a clean design, smooth animations, and detailed project showcases.

## 🚀 Tech Stack

- **Framework:** Next.js 15.2.4 (LTS)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** React 19
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics & Speed Insights

## 📋 Features

- **Hero Section** - Introduction with animated gradient background
- **About Me** - Professional background and experience
- **Projects Showcase** - Featured projects with detailed descriptions
- **Skills Section** - Tech stack and tools proficiency
- **Achievements** - Certifications and accomplishments
- **Contact Form** - Easy way to get in touch
- **Responsive Design** - Mobile-friendly layout
- **SEO Optimized** - Metadata API for search engines

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Wisyam/Portofolio-New.git
```

2. Navigate to the project directory:
```bash
cd Portofolio-New
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portofolio-New/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── common/           # Shared components
│   ├── icons/            # Icon components
│   ├── layout/           # Layout components (Header, Footer)
│   └── sections/         # Page sections (Hero, About, Projects, etc.)
├── data/                  # Portfolio data
│   └── portfolioData.ts  # All portfolio content
├── hooks/                 # Custom React hooks
├── public/                # Static assets
│   ├── images/           # Images
│   └── resume.docx       # Resume/CV
├── styles/               # Styles
│   └── globals.css       # Global CSS
├── types/                # TypeScript definitions
│   └── index.ts         # Type interfaces
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Updating Portfolio Data

Edit `data/portfolioData.ts` to update:
- Navigation links
- Projects information
- Skills list
- Achievements

### Changing Styles

- Edit `app/globals.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update brand colors in the Tailwind config

## 🔄 Migration Notes

This project was migrated from Next.js 14 (Pages Router) to Next.js 15 (App Router) with the following changes:

- Upgraded to Next.js 15.2.4 LTS
- Migrated from Pages Router to App Router
- Added Metadata API for SEO
- Removed deprecated files (pages/_app.tsx, pages/_document.tsx, index.html)
- Updated to React 19

## 📄 License

This project is for personal portfolio use.

## 👤 Author

**Wisyam Zain Amanullah**
- Fullstack Developer
- Location: Malang, Indonesia
- Email: wisyam@example.com

## 🙏 Acknowledgments

- Next.js Documentation
- Tailwind CSS
- Vercel for hosting and analytics
