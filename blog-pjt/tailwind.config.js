/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        gyeonggi: ["GyeonggiMedium", "sans-serif"],
        "gyeonggi-Bold": ["GyeonggiBold", "sans-serif"],
        "gyeonggi-light": ["GyeonggiLight", "sans-serif"],
      },
      colors: {
        Midnight: "#3D414D",
      },
    },
  },
  plugins: [],
};
