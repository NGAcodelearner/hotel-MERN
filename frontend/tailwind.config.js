/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#eab308",
        "dark-yellow": "#ca8a04",
        blue: "#3B82F6",
        "dark-blue": "#1E40AF",
      },
    },
  },
  plugins: [],
};
