/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#ffffff',
          surface: '#f6f9fc',
          card: '#ffffff',
          border: '#e3e8ee',
          text: '#0a2540',
          secondary: '#425466',
          muted: '#6b7c93',
        },
        accent: {
          DEFAULT: '#06d6a0',
          hover: '#05b890',
          muted: 'rgba(6, 214, 160, 0.06)',
          glow: 'rgba(6, 214, 160, 0.08)',
        }
      },
      boxShadow: {
        'stripe': '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
        'stripe-md': '0 2px 4px rgba(0, 0, 0, 0.04), 0 6px 18px rgba(0, 0, 0, 0.04)',
        'stripe-lg': '0 4px 8px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
