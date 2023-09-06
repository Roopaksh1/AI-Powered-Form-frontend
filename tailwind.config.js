/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#27b2ff',
        'active-link-color': 'white',
        'user-option-color': 'gray',
        'home-section1-bg': '#27b2ff',
        'home-section2-bg': 'white',
        'home-section3-bg': '#f8fafc',
        'mobile-menu-bg': 'white',
        'sign-up-color': '#27b2ff',
        'sign-up-hover-color': '#35A4E0'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
