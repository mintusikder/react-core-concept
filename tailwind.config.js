/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#a400ff",

        secondary: "#006bff",

        accent: "#00cc00",

        neutral: "#292f32",

        "base-100": "#f5fdff",

        info: "#00c4ff",

        success: "#00da91",

        warning: "#ffc300",

        error: "#ff5a62",
      },
    },
  ],

  plugins: [require("daisyui")],
};
