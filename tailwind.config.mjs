/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d8d8df',
          300: '#b7b8c2',
          400: '#8f90a1',
          500: '#727485',
          600: '#5c5d6d',
          700: '#4b4c59',
          800: '#40414c',
          900: '#393941',
          950: '#131316',
        },
        secondary: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c7cafe',
          300: '#a5a8fc',
          400: '#8580f9',
          500: '#7362f2',
          600: '#6445e6',
          700: '#5737cb',
          800: '#462fa2',
          900: '#3d2e81',
          950: '#251b4b',
        },
      },
    },
  },
  plugins: [],
}
