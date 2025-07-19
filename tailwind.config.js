/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"VT323"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};