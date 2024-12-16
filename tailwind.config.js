/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // All components/pages
    './public/index.html',            // Static HTML files
    './components/**/*.{html,js,jsx}' // Additional folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
