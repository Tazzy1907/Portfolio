/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8",
        },
        fontFamily: {
          custom: ["PexicoMicro-Regular", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  