/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {},
      colors: {
        bgColor: '#FCEEFD',
        pinkBg: '#FDF5FE',
        primary: '#EF5DA8',
        textGray: '#B2B2B2',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'body': ['Poppins'],
      },
      backgroundImage: {
        bgGradient: 'linear-gradient(0deg, #FCEEFD 0%, rgba(252, 238, 253, 0.00) 100%)',
      },
      boxShadow: {
        outsideBox: '0px 10px 30px 0px rgba(57, 57, 57, 0.05)'
      },
    },
  },
  plugins: [],
};
