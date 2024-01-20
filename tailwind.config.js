/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#7b68ee',
      secondary: '#4c1d95',
      'neutral-50': '#fff',
      'neutral-100': '#f5f5f4',
      'neutral-200': '#e5e5e5',
      'neutral-500': '#737373',
      'neutral-700': '#262626',
      'neutral-800': '#1f1f1b',
      'neutral-900': '#18181b',
      'neutral-950': '#000',
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
  plugins: [require('@designbycode/tailwindcss-text-shadow')],
};
