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
            width: "56%",
          },
        },
        mobiletyping: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
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
      },
      animation: {
        typing: "typing 9s steps(32) infinite alternate, blink 5s infinite",
        mobiletyping:
          "mobiletyping 9s steps(32) infinite alternate, blink 5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
