/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bungee': ['Bungee Shade', 'cursive'],
        'Finlandica': ['Finlandica', 'sans-serif']
      },
      backgroundImage: {
        'hero-bacground': "url('https://imgur.com/a/51Kilnx')"
      }
    },
  },
  plugins: [],
}