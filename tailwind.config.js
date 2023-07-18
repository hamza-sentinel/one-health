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
      fontFamily: {
        inter: "var(--font-inter)",
      },
      maxWidth: {
        screen: "100vw",
      },
      minHeight: {
        24: "24rem",
        "thematic-min": "36rem",
      },
      width: {
        screen: "100vw",
      },
      height: {
        screen: "100vh",
      },
      colors: {
        primary: "#48C8F2",
        primaryLight: "#7AD7F6",
        primaryDark: "#1ABAEF",
        secondary: "#D45558",
        secondaryLight: "#DE7D7F",
        secondaryDark: "#C33135",
        accent: "#147D4E",
        accentLight: "#1BA768",
        accentDark: "#0D4F31",
      },
    },
  },
  plugins: [],
};
