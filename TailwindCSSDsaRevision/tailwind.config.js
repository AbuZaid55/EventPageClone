/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        splineSans:"'Spline Sans', sans-serif"
      },
      colors:{
        primary:{
          500:'#5ef65e',
          600:'#63c663',
          950:'#043904'
        }
      }
    },
  },
  plugins: [],
}