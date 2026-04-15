/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mine: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          850: '#3a3a3a',
          900: '#3d3d3d',
          950: '#282828',
        },
        warm: {
          stone: '#f5f2ef',
          gray: '#777169',
          shadow: 'rgba(78, 50, 23, 0.04)',
        },
        accent: {
          gold: '#c9a86c',
          amber: '#d4a853',
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'inset-border': 'rgba(255,255,255,0.08) 0px 0px 0px 0.5px inset',
        'inset-dark': 'rgba(255,255,255,0.12) 0px 0px 0px 0.5px inset',
        'outline-ring': 'rgba(255,255,255,0.06) 0px 0px 0px 1px',
        'soft-elevation': 'rgba(0,0,0,0.2) 0px 4px 4px',
        'card': 'rgba(255,255,255,0.1) 0px 0px 1px, rgba(0,0,0,0.2) 0px 4px 4px',
        'warm': 'rgba(201, 168, 108, 0.15) 0px 6px 16px',
        'edge': 'rgba(255,255,255,0.08) 0px 0px 0px 0.5px',
        'glow': 'rgba(201, 168, 108, 0.3) 0px 0px 40px',
      },
      letterSpacing: {
        'tight-display': '-0.96px',
        'body': '0.18px',
        'button': '0.7px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}