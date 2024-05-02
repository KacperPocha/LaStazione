/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "sans-serif"]
      }
    },
    screens: {
      'sm': '360px',
      'md': '601px',
      'l': '1280px',
      'xl': '1600px'
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    }
  },
  plugins: [],
}