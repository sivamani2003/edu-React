/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        webRed: "#ee4962",
        webGreen: "#1ab79d",
        btn: "#20BF55",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif", "cursive"],
      },
      keyframes: {
        leftToRight: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        rightToLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        leftToRight: "leftToRight 20s  infinite linear ",
        rightToLeft: "rightToLeft 20s 2s infinite linear ",
      },

      boxShadow: {
        "3xl": "0 5px 0 #1ab79d ",
        "4xl": "5px 5px 5px #1ab79d ",
      },
      dropShadow: {
        "5xl": " 0 20px 10px #ee4962 ",
      },
    },
  },
  plugins: [require("daisyui")],
};
