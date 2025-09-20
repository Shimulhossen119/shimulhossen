/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },

      keyframes: {
        morph: {
          '0%': { borderRadius: '69% 31% 66% 34% / 21% 30% 70% 79%' },
          '50%': { borderRadius: '34% 66% 31% 69% / 79% 70% 30% 21%' },
          '100%': { borderRadius: '69% 31% 66% 34% / 21% 30% 70% 79%' },
        },
      },
      animation: {
        morph: 'morph 3s linear infinite',
      },
      colors: {
        bodyColor: "#000000",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}

