/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeSlide: 'fadeSlide 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
