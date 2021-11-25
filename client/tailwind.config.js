module.exports = {
  purge: ['./src/*{.js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        docflow_orange: '#f54404',
        docflow_blue: '#26c6da',
        docflow_red: '#f54404',
        docflow_dark: {
          DEFAULT: '#030303',
          brighter: '#1a1a1a',
          brightest: '#272728',
        },
        docflow_border: {
          DEFAULT: '#343536',
        },
        docflow_text: {
          DEFAULT: 'rgb(215, 218, 220)',
          darker: '#818384',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
