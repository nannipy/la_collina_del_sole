module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          parchment: '#F3E9D5',
          'parchement-dark': '#E6D9C3',
          'footer-dark': '#434547',
          feldgrau: '#536452',
          'feldgrau-dark': '#435243',
          citron: '#BEBC66',
          'outer-space': '#434547',
          'custom-black': '#000000',
          
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }