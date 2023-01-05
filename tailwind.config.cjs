/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      s: '500px',
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
    extend:{
      fontFamily:{
        'proxima': ['proxima-regular']
      },
      colors:{
        'nav-blue': '#5403FF',
        'nav-light-blue': '#31DAFF',
        'darker-blue': '#0257FE',
        'primary-blue': '#0076FF',
        'primary-blue-light': '#0176FF',
        'blue-grey': '#DBEBF2',
        'light-grey': '#E0E9ED',
        'lighter-grey': '#F5F9FB'
      },
      backgroundImage:{
        'landingPage': "url('/src/assets/Video.png')",
      }
    }
    
  },
  plugins: [],
};