/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      textGray: { DEFAULT: "#EEEEEE" },
      textColor: { DEFAULT: "#F5F5F5" },
      background: {
        dark: "black",
        DEFAULT: "#111111",
        light: "#3F72AF",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
