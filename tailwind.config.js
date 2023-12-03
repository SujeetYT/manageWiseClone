/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1c1c1c",
        purple: "#8247ff",
        grey: "#ededfa",
        orange: '#fe8162',
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      keyframes:{
        move_ltr:{
          "0%":{
            transform: "translateX(-100%)",
          },
          "100%":{
            transform: "translateX(100%)",
          }
        }
      },
      animation:{
        "transX":"move_ltr 15000ms linear infinite"
      }
    },
  },
  plugins: [],
  presets: [keepPreset],
}
