/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables "dark" class switching
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10B981", // Electric Green
          background: "#0F172A", // Dark Gray / Navy
          surface: "#1E293B", // Card/Modal Background
          text: "#E2E8F0", // Soft White
          accent: "#FACC15", // Yellow Accent
        },
      },
    },
  },
  plugins: [],
};
