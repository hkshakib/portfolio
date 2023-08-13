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
            width: "60%",
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
        typing: "typing 8s steps(30) infinite alternate, blink 5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
