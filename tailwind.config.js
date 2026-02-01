/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#2563EB",
      primaryDark: "#1E3A8A",
      accent: "#38BDF8",
      bgLight: "#F8FAFC",
      textMain: "#0F172A",
      textMuted: "#475569",
    },
  },
},

  plugins: [],
}
