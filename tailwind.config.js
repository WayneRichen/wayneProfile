module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        tan: "tan"
      },
      colors: {
        tan: "tan"
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        white: '0 0 30px -3px white',
      },
      // brightness: ['hover', 'focus']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
