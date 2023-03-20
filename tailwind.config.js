/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "60px",
    },

    extend: {
      colors: {
        primary: "#0ea5e9",
      },
      screens: {
        "2xl": "1100px",
      },
    },
  },
  plugins: [],
};
