/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Bitter"],
      body: ["Poppins"],
      script: ["Pinyon Script"],
      scriptText: ["Mea Culpa"],
    },
    extend: {
      colors: {
        saluteTan: "#eddaba",
        saluteNavy: "#2a3e47",
        saluteRed: "#ba2b23",
        saluteBlue: "#082c5c",
      },
    },
  },
  plugins: [],
};
