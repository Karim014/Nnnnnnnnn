const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8B1538',
        secondary: '#F5F5F5',
        accent: '#A01030',
      },
      fontFamily: {
        sans: [
          'var(--font-ibm)',
          'var(--font-kufi)',
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        nexroute: {
          primary: '#8B1538',
          secondary: '#F5F5F5',
          accent: '#A01030',
          neutral: '#2E0E1F',
          'base-100': '#ffffff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    rtl: true,
  },
};