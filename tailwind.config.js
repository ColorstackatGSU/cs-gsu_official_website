/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gsu: {
          blue: '#0039A6',
          white: '#FFFFFF',
          red: '#CC0000',
          'blue-steel': '#374057',
          'cool-blue': '#0071CE',
          vibrant: '#00AEEF',
          'light-blue': '#97CAEB',
          'light-gray': '#EEEEEE',
          'med-gray': '#CCCCCC',
          'dark-gray': '#767679',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
