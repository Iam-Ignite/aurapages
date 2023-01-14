/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./host/onboarding/**/*.{html,js}",
    "./auth/**/*.{html,js}",
    "./dashboard/**/*.{html,js}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./client/**/*.{html,js}",
    "./Admin/**/*.{html,js}",

  ],
  theme: {
    extend: {
      fontFamily: {
        aura: ["Outfit", "sans-serif"],
      },
      colors: {
        neutral: "rgb(119, 126, 144)",
        neutral06: "#272B30",
        neutral107: "rgba(230, 232, 236, 1)",
        neutral108: "#B1B5C4",
        auraPrimary: "rgb(244, 130, 32)",
        auraPrimary100: "rgb(244, 130, 32, 0.1)",
        purlple50:"#EFF3FA",
        auraSecondary: "#848FAC",
       auraActive100: "rgba(50, 160, 113, 0.1)",
        blue: {
          600: "rgb(244, 130, 32)",
        },
      },
      fontSize: {
        base: "1rem",
      },
    }, 
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
