/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
