/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  fontFamily: {
    'VictorMono': ['Victor Mono'],
  },
  extend: {
    colors: {
      blue: {
        DEFAULT: '#1e40af'
      }
    },
    // backgroundImage: {
    //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    // },
  },
  darkMode: 'class'
};
export const plugins = [];
export const darkMode = 'class';
