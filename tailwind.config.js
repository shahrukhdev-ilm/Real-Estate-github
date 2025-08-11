/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        themegreen: '#25db79',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
}