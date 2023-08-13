/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#14213D",
        secondary: "#FCA311",
        tertiary: "#E5E5E5",
      },
    },
  },
  plugins: [],
}