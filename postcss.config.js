// If using ES modules (type: "module" in package.json)
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}

// OR if using CommonJS
// module.exports = {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   }
// }