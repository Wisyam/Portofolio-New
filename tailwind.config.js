/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg-dark': '#212D2D',
        'brand-bg-secondary': '#363F3A',
        'brand-text-heading': '#66726B',
        'brand-border': '#40423B',
        'brand-text-light': '#CED4CF',
        'brand-accent': '#8F9B93',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(102, 114, 107, 0.1)',
        'glow-hover': '0 0 25px 8px rgba(102, 114, 107, 0.15)',
        'glow-neon': '0 0 5px #8F9B93, 0 0 10px #8F9B93',
      }
    },
  },
  plugins: [],
}
