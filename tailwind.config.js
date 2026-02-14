/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#09090b',
          surface: '#111114',
          card: '#1a1a20',
          border: '#2a2a32',
          text: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        accent: {
          DEFAULT: '#06d6a0',
          hover: '#34e0b4',
          muted: 'rgba(6, 214, 160, 0.1)',
          glow: 'rgba(6, 214, 160, 0.15)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-up': 'slideUp 0.8s ease-out both',
        'bounce-slow': 'bounce 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
