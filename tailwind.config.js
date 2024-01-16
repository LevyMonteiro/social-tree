/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#7b68ee',
      secondary: '#4c1d95',
      white: '#fff',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    screens: {
      xs: '375px',
      sm: '425px',
      md: '640px',
      lg: '768px',
      xg: '1024px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
};
