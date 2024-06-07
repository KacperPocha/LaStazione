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
      'sm': {'max':'780px'},
      'md': {'min': '781px' ,'max':'1280px'},
      'l': {'min': '1281px' ,'max':'1600px'},
      'xl': '1600px'
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    }
  },
  plugins: [],
}