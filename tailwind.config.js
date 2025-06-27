/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A3A90',
        gold: '#d4af37',
        darkGray: '#2c2f36'
      },
      fontFamily: {
        'sour-gummy': ['Sour Gummy', 'sans-serif'],
        'parisienne': ['Parisienne', 'cursive']
      },
      animation: {
        'glow': 'glow 1.5s infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00f, 0 0 10px #00f' },
          '50%': { textShadow: '0 0 20px #00f, 0 0 40px #00f' },
          '100%': { textShadow: '0 0 5px #00f, 0 0 10px #00f' }
        }
      }
    },
  },
  plugins: [],
}