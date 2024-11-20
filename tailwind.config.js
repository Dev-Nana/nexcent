/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#47a24a',
        green2: '#81C784',
        gray2: '#505050',
      },
    },
    plugins: [],
  }
}