/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this based on your project structure
    './public/index.html', // Include any HTML entry points
    './components/**/*.{html,js,jsx,ts,tsx}', // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
