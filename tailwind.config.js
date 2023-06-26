/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
theme: {
  extend: {
    'bg-color': '#DFDAD4'
  },
  backgroundImage:(theme)=>({

  }),
  fontFamily: {
    inter:['Inter', 'sans-serif']
  },
  screens: {
    xs: '480px',
    sm: '768px',
    md: '1080px',
    lg: '1024px',
    xl: '1280px',
  },
  extend: {
    backgroundImage: {
      'hero': "url('../public/images/bg-hero-image.jpg')",
    },
}
},
plugins: [],
}
