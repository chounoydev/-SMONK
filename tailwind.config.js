/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bearBrown: "#A0522D",
        bearCream: "#FFF8E7",
        bearPeach: "#FFDAB9",
        bearOrange: "#FFB347",
        bearPink: "#FF6EC7",
        bearSky: "#87CEEB",
        bearGrass: "#98FB98",
        bearBlue: "#4FC3F7",
        bearGreen: "#32CD32",
        bearPurple: "#BA55D3",
      },
      fontFamily: {
        cartoon: ['"Comic Neue"', "cursive"],
      },
      borderRadius: {
        retro: "1.2rem",
      },
      boxShadow: {
        retro: "5px 5px 0px #A0522D",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        bounceRetro: "bounceRetro 0.8s infinite",
        swing: "swing 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceRetro: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        swing: {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
