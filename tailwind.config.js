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
        saluteTan: "#FAE3C2",
        saluteNavy: "#2a3e47",
        saluteRed: "#B2170B",
        saluteBlue: "#03243A",
      },
    },
  },
  plugins: [],
};
