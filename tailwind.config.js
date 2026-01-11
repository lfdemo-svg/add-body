/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ds-corporate': '#005686',
        'ds-blue': '#0870d3',
        'ds-denim': '#075cad',
        'ds-deep': '#04315d',
        'ds-light': '#e9f7ff',
        'ds-dark': '#021a2e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'rotate-slow': 'rotate360 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(8, 112, 211, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(8, 112, 211, 0.7))' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
