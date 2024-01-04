import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url(/images/p2-team-img1.jpg.svg)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

// // tailwind.config.js
// const { nextui } = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };
