/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Snarky', 'sans serif'],
        custom1: ['Asphaltic', 'sans serif'],
        custom2: ['Poppins', 'sans serif'],
        custom3: ['n27', 'sans serif'],
      },
    },
  },
  plugins: [],
}


