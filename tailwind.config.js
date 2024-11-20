/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'san-serif'],
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}

