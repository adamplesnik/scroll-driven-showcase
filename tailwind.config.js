/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      transitionTimingFunction: {
        line: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
