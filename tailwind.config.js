/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'averta': ['AvertaStd', 'sans-serif'],
      },
      colors: {
        whyte: '#F5F5F5',
        grhey: '#999CA0',
        darkGrhey: '#1F1F1F',
        violet: {
          100: '#635CBD',
          300: '#4E46B4',
        },

      }
    },
  },
  plugins: [],
}
