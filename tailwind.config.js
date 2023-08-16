const { transform } = require("framer-motion");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BgCustom: "rgba(243, 246, 246, var(1))",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "65%",
          },
        },
        tablettyping: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
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
            width: "0%",
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
      },

      animation: {
        typing: "typing 9s steps(32) infinite alternate, blink 5s infinite",
        mobiletyping:
          "mobiletyping 9s steps(32) infinite alternate, blink 5s infinite",
        tablettyping:
          "tablettyping 9s steps(32) infinite alternate, blink 5s infinite",
        styping: "styping 9s steps(32) infinite alternate, blink 5s infinite",
        wavinghand: "wave 2s linear infinite",
        hFlip: "flipHorizontal 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
