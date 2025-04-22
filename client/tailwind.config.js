/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#1E1E2F",
        },
        card: {
          light: "#FFFFFF",
          dark: "#27293D",
        },
        modal: {
          light: "#FFFFFF",
          dark: "#2E3146",
        },
        primary: "#3B82F6", // Blue - Main actions (Save, Submit, Publish)
        secondary: "#64748B", // Slate gray - Secondary buttons (Cancel, Back, Close)
        accent: {
          amber: "#F59E0B", // Attention / Highlight (small icons, tags)
          green: "#10B981", // Success / Active state
        },
        text: {
          primary: {
            light: "#111827", // Near-black for light backgrounds
            dark: "#E5E7EB", // Light gray for dark backgrounds
          },
          secondary: {
            light: "#6B7280", // Gray-500 for muted descriptions
            dark: "#9CA3AF", // Gray-400 for muted descriptions in dark mode
          },
        },
        border: {
          light: "#E5E7EB", // Gray-200 for light theme (Subtle separation between elements)
          dark: "#374151", // Gray-700 for dark theme (Subtle separation between elements.)
        },
      },
    },
  },
  plugins: [],
};
