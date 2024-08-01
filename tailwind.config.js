/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "qw": "0px 4px 4px 0px #00000040"
      },
      colors: {
        customRed: "rgba(187,54,42,1)",
        customGrey: "#555658",
        lightGrey: "#636a80",
        limeGreen: "#6fda44",
        grayish: "#eaeaea"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "greygradient": "linear-gradient(90deg, #010610 0%, #555658 100%)",
          "lightgreygradient": "linear-gradient(180deg, #555658 0%, #B8BABE 100%)",
          "footer": "url('/homepage/footer 1.png')",
          "redishgradient": "linear-gradient(90deg, #BB362A 0%, #F15042 100%)"
      },
    },
  },
  plugins: [],
};
