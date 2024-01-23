/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter , sans-serif",
      },
      colors: {
        white: "#fff",
        blue: "#175CD3",
        textColorGrey: "#667085",
        textColorGreySub: "#475467",
        textColorDark: "#101828",
        accordion: "#F9FAFB",
        nav: "#F2F4F7",
        borderColor: "#98A2B3",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
