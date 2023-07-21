/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        base : "Rubik-Regular",
        bold : "Rubik-Bold",
        light : "Rubik-Light",
        semibold: "Rubik-Semibold"
      },  
    },
  },
  plugins: [],
}

