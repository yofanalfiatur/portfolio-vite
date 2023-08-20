/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#14213D",
        secondary: "#FCA311",
        tertiary: "#E5E5E5",
        quaternary: "#84817E",
      },
      screens: {
        "2xl": "1320px",
      }
    },
  },
  plugins: [],
}