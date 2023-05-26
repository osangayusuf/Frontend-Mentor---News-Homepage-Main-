/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
      }, 
      colors: {
        'softorange': 'hsl(35, 77%, 62%)',
        'softred': 'hsl(5, 85%, 63%)',
        'offwhite': 'hsl(36, 100%, 99%)',
        'grayishblue': 'hsl(233, 8%, 79%)',
        'darkgrayishblue': 'hsl(236, 13%, 42%)',
        'darkblue': 'hsl(240, 100%, 5%)',
        'attribution': 'hsl(228, 45%, 44%)'
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}

