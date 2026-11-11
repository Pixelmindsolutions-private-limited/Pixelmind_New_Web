/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#0B1F24",
          900: "#102A30",
          800: "#16434A",
          700: "#0F766E",
          500: "#14B8A6",
          300: "#5EEAD4",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16,42,48,.09)",
        teal: "0 18px 45px rgba(15,118,110,.2)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
