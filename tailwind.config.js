/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-pink': '#FAF4F4',
        'custom-light-grey': '#F3F3F3',
      },
    },
  },
  plugins: [],
}