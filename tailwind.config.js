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
      lila: '#828282',/* #9B87E1  //GRIS*/
      lila1: '#474B4E',/* #625396 //GRIS OSCURO*/
      grey: '#D6D8C1',
      grey1: '#c4c4c0'
    }
  },
  plugins: [
    require("daisyui"),
  ],
}


