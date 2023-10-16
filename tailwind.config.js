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
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Eina", "sans-serif"],
        display: ["Strokeweight", "sans-serif"],
      },
      animation: {
        morph: "morph 300ms cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        morph: {
          "0%": {
            width: 0,
            opacity: 0,
          },
          "100%": {
            width: 180,
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
