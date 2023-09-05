/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#23bcff',
        'active-link-color': '#f87171',
        'user-option-color': 'gray',
      },
    },
  },
  plugins: [],
};
