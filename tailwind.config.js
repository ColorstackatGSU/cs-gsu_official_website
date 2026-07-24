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
          'cool-blue': '#0071CE',
          vibrant: '#00AEEF',
          'light-blue': '#97CAEB',
          'light-gray': 'rgba(255, 255, 255, 0.12)',
          'med-gray': 'rgba(255, 255, 255, 0.25)',
          'dark-gray': '#94a3b8',
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
        display: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
};
