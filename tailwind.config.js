/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgCustom: 'rgba(243, 246, 246, var(1))',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}

