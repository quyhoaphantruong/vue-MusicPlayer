/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        glass: "#e9e9e9",
        gray: "#b3b3b3",
        lightGray: "#bfbfbf",
        bgBlack: "#121212",
      },
    },
  },
  plugins: [],
};
