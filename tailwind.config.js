/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, etc., as needed (e.g., from your ArtGram CSS)
      colors: {
        primary: '#0f172a',
        secondary: '#e11d48',
        light: '#f1f5f9',
        highlight: '#facc15',
        tuftingPurple: '#9b59b6',
        tuftingPink: '#ec407a',
        warning: '#facc15',
        accent: '#e11d48',
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}