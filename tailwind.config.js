module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        tan: "tan"
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
