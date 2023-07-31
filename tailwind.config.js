/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1F793A",
        secondary: "#FCFAFA",
      },
      dropShadow: {
        main: "10px 10px 0px #222222",
        secondary: "5px 5px 0px #222222",
        sml: "2px 2px 0px #222222",
      },
    },
  },
  plugins: [],
};
