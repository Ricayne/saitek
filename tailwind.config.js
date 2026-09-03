/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      colors: {
        navy: '#0A0F1E',
        'navy-soft': '#0F172A',
        orange: '#FF4D00',
        'orange-hover': '#E04400',
      },
    },
  },
  plugins: [],
};
