/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "#FF7979",
        lightGreen: "#38CC8B",
        lightPurple: "#5E54A4",
        lightBlack: "#3D3B48",
      },
      boxShadow: {
        costumShadow: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
