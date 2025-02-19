// tailwind.config.js
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
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
  plugins: [daisyui],
};