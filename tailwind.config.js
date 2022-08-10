module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'width()' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    colors: {
      white: '#FFFFFF',
      black: '#686868',
      transp: '#FFFFFF30',
      lila: '#9B87E1',
      lila1: '#625396',
      grey: '#D6D8C1',
      grey1: '#c4c4c0'
    }
  },
  plugins: [
    require("daisyui"),
  ],
}


