/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      yellow: "#FFC633",
      primary: "#000",
      placeholder: "#909090",
      gray1: "#F0F0F0",
      lightGray: "#F2F0F1",
      red: "#FF3333",
      purple: "#9c34e8",
      black: "#000000",
    },
  },
  plugins: [],
};
