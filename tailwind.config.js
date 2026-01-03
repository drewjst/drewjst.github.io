/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Fira Code"', 'monospace'], // Override sans to enforce mono everywhere per user request
      },
      colors: {
        zed: {
          bg: '#fbfbfb',
          surface: '#ffffff',
          border: '#e5e5e5',
          text: '#333333',
          muted: '#888888',
          accent: '#4c4c4c', // Dark grey for accent
          highlight: '#e8e8e8' // Hover state
        }
      }
    },
  },
  plugins: [],
}
