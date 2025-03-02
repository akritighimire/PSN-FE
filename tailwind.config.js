/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#A53860',
        secondary:'#F9DBBD',
        // gray: '#F7F7F7',
        lightgray: '#AAAAAA',
      }
    },
  },
 
  plugins: [],
}