/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          50: '#F9F7F2',  // Warm White
          100: '#F0EBE0', // Lighter Earth
          200: '#E6D5C3', // Earth
          300: '#C9B198', // Muted Earth
          400: '#8A9A5B', // Sage Green
          500: '#4B5E40', // Deep Forest Green
          600: '#3D4D34', // Darker Green
          700: '#2C3327', // Charcoal Green
          800: '#1A1F18', // Deep Charcoal
          950: '#0F120E', // Near Black
        }
      },
      fontFamily: {
        serif: ['"Noto Serif KR"', 'serif'],
        sans: ['"Noto Sans KR"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

