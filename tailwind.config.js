/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        vt: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}