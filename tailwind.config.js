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
          bg: '#ffffff',
          surface: '#f8f9fa',
          card: '#ffffff',
          border: '#e5e7eb',
          text: '#111827',
          secondary: '#374151',
          muted: '#6b7280',
        },
        accent: {
          DEFAULT: '#06d6a0',
          hover: '#05c090',
          muted: 'rgba(6, 214, 160, 0.08)',
          glow: 'rgba(6, 214, 160, 0.12)',
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
