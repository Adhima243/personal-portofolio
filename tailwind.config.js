/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Outfit', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        base: {
          bg: '#0A0A0A',
          surface: '#111111',
          card: '#181818',
          border: '#2A2A2A',
          text: '#FAFAFA',
          muted: '#A1A1AA',
          accent: '#8B5CF6',
          accentGlow: '#A855F7',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.35)',
        soft: '0 12px 40px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
