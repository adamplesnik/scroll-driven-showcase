/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient auto ease-in-out forwards',
        'to-max-width-unset': 'to-max-width-unset 5s linear forwards',
        'to-opacity-full': 'to-opacity-full 5s ease-in-out forwards',
        'to-stroke-dashoffset-0': 'to-stroke-dashoffset-0 5s ease-in-out forwards',
        'to-translate-x-0': 'to-translate-x-0 5s ease-in-out forwards',
        'to-translate-y-0': 'to-translate-y-0 5s ease-in-out forwards',
        'stroke-opacity':
          'to-opacity-full 5s ease-in-out forwards, to-translate-x-0 5s ease-in-out forwards',
      },
      keyframes: {
        gradient: {
          from: {
            backgroundSize: '400% 100%',
          },
          '50%': {
            backgroundSize: '200% 100%',
          },
          '70%': {
            backgroundSize: '100% 100%',
            opacity: 1,
          },
          '98%': {
            opacity: 0,
          },
          to: {
            backgroundSize: '44% 100%',
            opacity: 0,
          },
        },
        'to-max-width-unset': {
          to: { maxWidth: 'unset' },
        },
        'to-opacity-full': {
          to: { opacity: 1 },
        },
        'to-stroke-dashoffset-0': {
          to: { strokeDashoffset: 0 },
        },
        'to-translate-x-0': {
          to: { transform: 'translateX(0)' },
        },
        'to-translate-y-0': {
          to: { transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        line: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    plugin(function ({ matchUtilities, addVariant }) {
      matchUtilities(
        {
          'dash-offset': (value, { modifier }) => ({
            strokeDashoffset: modifier,
          }),
        },
        { values: { DEFAULT: '' }, modifiers: 'any' }
      )
      matchUtilities(
        {
          'dash-array': (value, { modifier }) => ({
            strokeDasharray: modifier,
          }),
        },
        { values: { DEFAULT: '' }, modifiers: 'any' }
      )
      addVariant('path', '& > path')
    }),
  ],
}
