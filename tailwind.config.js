/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C00',
          dark: '#FF6B00',
          light: '#FFD700',
        },
        accent: {
          DEFAULT: '#4B0082',
          dark: '#2E004F',
          light: '#800080',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};