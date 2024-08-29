/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'shape-blue': '#000842',
        'primary': '#0C21C1'
      }
    },
  },
  plugins: [],
}