/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'nav-blue': '#5403FF',
        'nav-light-blue': '#31DAFF',
        'primary-blue': '#0176FF',
        'primary-blue-light': '#0076FF',
        'darker-blue': '#0257FE',
        'lighter-grey': '#F5F9FB',
        'light-grey': '#E0E9ED'
      },
      fontFamily:{
        'proxima': ['proxima-regular']
      },
    },
    maxWidth: {
      's': '298px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};