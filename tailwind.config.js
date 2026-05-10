/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-2': '#111111',
        'bg-3': '#161616',
        'bg-card': '#141414',
        accent: '#4f8ef7',
        'accent-2': '#7c5cfc',
        green: '#3ecf8e',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'spin-slow': 'spin-slow 20s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'badge-pulse': 'badge-pulse 2s infinite',
        'slide-right': 'slideRight 1s ease both',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'badge-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideRight: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(79,142,247,0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(79,142,247,0.18)' },
        },
      },
    },
  },
  plugins: [],
}
