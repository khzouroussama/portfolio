module.exports = {
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'scale(3)',
          },
          '25%': {
            transform: 'scale(4)',
          },
          '50%': {
            transform: 'scale(3)',
          },
          '75%': {
            transform: 'scale(4)',
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
