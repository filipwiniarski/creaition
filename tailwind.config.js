/** @type {import('tailwindcss').Config} */

const fallbackFonts = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji",
];

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eina', 'sans-serif'],
        display: ['Strokeweight', 'sans-serif']
      }
    },
  },
  plugins: [],
}
