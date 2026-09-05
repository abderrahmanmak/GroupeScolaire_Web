/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#199347',
        'light-purple': '#dab1da',
        'crimson': '#B30000',
      },
      fontFamily: {
        sans: ['"Graphik Web"', 'sans-serif'],
        serif: ['"Lyon Display"', 'serif'],
        display: ['"Graphik Web"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
