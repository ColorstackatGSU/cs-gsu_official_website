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
          'blue-steel': '#cbd5e1',
          'light-blue': '#97CAEB',
          'light-gray': 'rgba(255, 255, 255, 0.12)',
          'med-gray': 'rgba(255, 255, 255, 0.25)',
        },
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
};
