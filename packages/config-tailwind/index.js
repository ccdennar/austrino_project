const tokens = require('../ui/tokens/light.json')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: tokens.color.brand,
      },
      fontFamily: {
        sans: tokens.font.sans,
      },
    },
  },
  plugins: [],
}