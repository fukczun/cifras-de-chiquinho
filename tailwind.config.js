/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans-serif"]
      }
    },
    screens: {
      'max-sm': {'max': '639px'},
      'max-xs': {'max': '380px'},
      'max-2xs': {'max': '290px'}
    }
  },
  plugins: [],
}