module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#555562',
          200: '#4C4C57',
          300: '#42424C',
          400: '#393941',
          500: '#2D2D34',
          600: '#26262C',
          700: '#1C1C21',
          800: '#131316',
          900: '#09090B'
        },
        accent: {
          100: '#FFE5EC',
          200: '#FFC2D1',
          300: '#FFB3C6',
          400: '#FF8FAB',
          500: '#FA3869',
          600: '#F9245A',
          700: '#F9104A',
          800: '#EF0640',
          900: '#DB063B'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
