/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: {
          bg: '#FFFFFF',
        },
        header: {
          text: '#1A1A1A',
          divider: 'rgba(0,0,0,0.06)',
        },
        canvas: {
          topLeft: '#104D76',
          topCenter: '#0E5994',
          topRight: '#0A3F72',
          bottomLeft: '#2190C8',
          bottomCenter: '#157BB4',
          bottomRight: '#1592D1',
        },
        text: {
          onBluePrimary: '#FFFFFF',
          onBlueSecondary: 'rgba(255,255,255,0.78)',
          onBlueMuted: 'rgba(255,255,255,0.55)',
        },
        accent: {
          cyan: '#44E6FD',
          cyanDark: '#0FB7D6',
          cyanGlow: 'rgba(68,230,253,0.55)',
        },
        highlight: {
          red: '#EB586C',
          redSoft: '#FFAAA7',
        },
        wireframe: {
          white: 'rgba(255,255,255,0.32)',
          whiteDense: 'rgba(255,255,255,0.45)',
        },
        modal: {
          bg: '#FFFFFF',
          text: '#202225',
          textMuted: '#4A5560',
          border: 'rgba(0,0,0,0.08)',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1-hero': ['60px', { lineHeight: '1.02', letterSpacing: '0.01em', fontWeight: '800' }],
        'h2-section': ['42px', { lineHeight: '1.06', letterSpacing: '0.01em', fontWeight: '800' }],
        'body-small': ['13px', { lineHeight: '1.55', fontWeight: '400' }],
        'pill-label': ['11px', { letterSpacing: '0.08em', fontWeight: '700' }],
        'stats-number': ['18px', { fontWeight: '800' }],
        'stats-caption': ['11px', { fontWeight: '500' }],
      },
      spacing: {
        'base': '8px',
        'page-gutter': '24px',
        'canvas-padding': '64px',
        'col-gap': '48px',
      },
      maxWidth: {
        'page': '1280px',
      },
      height: {
        'canvas': '640px',
      },
      borderRadius: {
        'pill': '999px',
        'modal': '16px',
      },
      boxShadow: {
        'modal': '0 20px 50px rgba(0,0,0,0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'float': 'float 5.2s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'rotate-ring': 'rotateRing 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        rotateRing: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-628' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(235, 88, 108, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 16px rgba(235, 88, 108, 0.7))' },
        },
      },
    },
  },
  plugins: [],
};
