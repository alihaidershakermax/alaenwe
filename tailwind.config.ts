import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        university: {
          primary: '#1e40af',      // Blue 700
          secondary: '#3b82f6',    // Blue 500
          accent: '#60a5fa',       // Blue 400
          dark: '#1e3a8a',         // Blue 900
          light: '#dbeafe',        // Blue 100
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        cairo: ['var(--font-cairo)'],
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        'marquee-left-slow': 'marquee-left 40s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
