module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    /*     colors: {
      primary: '#383E4C',
      secondary: '#F2F2F2',
    }, */
    extend: {
      colors: {
        'nav-bg': '#383E4C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
