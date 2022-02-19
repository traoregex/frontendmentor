module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif']
    },
    fontSize: {
      'base': '15px'
    },
    extend: {
      colors: {
        white: '#ffffff',
        lightGray: '#d6e2f0',
        grayishBlue: '#7b879d',
        darkBlue: '#1f3251'
      }
    },
  },
  plugins: [],
}
