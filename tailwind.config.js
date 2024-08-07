const { transform } = require("framer-motion");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #33CCCC 67%, #ccf381 33%)',
      },
      colors: {
        BgCustom: "rgba(243, 246, 246, var(1))",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "90%": {
            width: "47%",
          },
        },
        tablettyping: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "55%",
          },
        },
        mobiletyping: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "55%",
          },
        },
        styping: {
          "0%": {
            width: "5%",
            visibility: "hidden",
          },
          "100%": {
            width: "80%",
          },
        },
        blink: {
          "50%": {
            borderColor: "black",
          },
          "100%": {
            borderColor: "black",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flipHorizontal: {
          "100%": {
            transform: "rotateY(360deg)",
          },
        },
        openMenu: {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        typing: "typing 9s steps(32) infinite alternate, blink 5s infinite",
        mobiletyping:
          "mobiletyping 9s steps(32) infinite alternate, blink 5s infinite",
        tablettyping:
          "tablettyping 9s steps(32) infinite alternate, blink 5s infinite",
        styping: "styping 9s steps(32) infinite alternate, blink 5s infinite",
        wavinghand: "wave 4s linear infinite",
        hFlip: "flipHorizontal 2s infinite",
        openMenu: "openMenue .5s ease-in-out forwards",
      },
      fontFamily: {
        modefor: ["Wix Madefor Text"],
      },
    },
  },
  plugins: [
    require("tailwindcss-font-inter"),
    require("@tailwindcss/typography"),
  ],
};
