import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c0a',
          900: '#111411',
          800: '#171a17',
          700: '#20241f',
          600: '#2b2f29',
        },
        bone: {
          50: '#f6f1e7',
          100: '#ede6d5',
          200: '#ddd2b6',
          300: '#c6b891',
        },
        olive: {
          500: '#5b6243',
          600: '#484d33',
          700: '#383c28',
          800: '#272a1c',
        },
        rust: {
          500: '#b5502a',
          600: '#9a4222',
        },
        brass: {
          400: '#c8a44b',
          500: '#a8862f',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        brutal: '0.18em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'rise': 'rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'fade': 'fade 1.2s ease both',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
