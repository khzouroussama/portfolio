module.exports = {
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1.5)',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(2)',
          },
          '50%': {
            transform: 'translate(0, 60px) scale(1)',
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(2)',
          },
        },
      },
      colors: {
        primary: '#db00ff',
        secondery: '#0047ff',
      },
    },
  },
  plugins: [],
}
