/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      anton: ['Anton', 'sans-serif'],
      aBeeZee: ['ABeeZee', 'sans-serif'],
      alatsi: ['alatsi', 'sans-serif'],
      acme: ['acme', 'sans-serif'],
      abhayaLibre: ['Abhaya Libre', 'sans-serif'],
      koulen: ['koulen', 'sans-serif'],
      inter: ['inter','sans-serif']
    }
  },
  plugins: [],
}

