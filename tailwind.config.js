/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient auto ease-in-out forwards',
        'to-max-width-unset': 'to-max-width-unset 5s linear forwards',
        'to-opacity-full': 'to-opacity-full 5s ease-in-out forwards',
        'to-translate-x-0': 'to-translate-x-0 5s ease-in-out forwards',
      },
      transitionTimingFunction: {
        line: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations')],
}
