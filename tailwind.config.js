/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'main': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }
    },
    screens: {
      'sm': '389px',

      'md': '767px',

      'lg': '1439px',
    },
  },
  daisyui: {
    themes: ["wireframe"],
  },
  plugins: [require("daisyui")],
}

