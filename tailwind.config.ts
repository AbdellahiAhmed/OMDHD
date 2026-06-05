import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        // Brand palette
        ink: {
          DEFAULT: '#102033', // dark text
          900: '#0a1626',
          700: '#1c2f47',
        },
        blue: {
          DEFAULT: '#063B73', // deep institutional blue
          50: '#eef3f9',
          100: '#d6e2f0',
          200: '#a9c2dd',
          300: '#6f97c2',
          400: '#3f6da6',
          500: '#1d5293',
          600: '#063B73',
          700: '#053161',
          800: '#04274d',
          900: '#021a36',
        },
        green: {
          DEFAULT: '#1F8A4C', // development green
          50: '#eef8f1',
          100: '#d3eddc',
          200: '#a6dbb9',
          300: '#6BCB77', // soft green accent
          400: '#3fae66',
          500: '#1F8A4C',
          600: '#177040',
          700: '#125a34',
        },
        sand: {
          DEFAULT: '#D9A441', // mauritanian sand / gold
          50: '#fbf6ea',
          100: '#f5e9c9',
          200: '#ecd496',
          300: '#e2bf66',
          400: '#D9A441',
          500: '#c08a2a',
          600: '#9c6e21',
        },
        cloud: '#F8FAF7', // off white
        mist: '#E8EEF2', // soft gray

        // Semantic tokens (driven by CSS variables in globals.css)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-tajawal)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
        display: ['var(--font-tajawal)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,32,51,0.04), 0 8px 24px -8px rgba(16,32,51,0.10)',
        lift: '0 2px 4px rgba(16,32,51,0.05), 0 24px 48px -16px rgba(6,59,115,0.22)',
        glow: '0 0 0 1px rgba(217,164,65,0.25), 0 18px 50px -18px rgba(217,164,65,0.45)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'dune': 'radial-gradient(120% 120% at 100% 0%, #fbf6ea 0%, #F8FAF7 38%, #eef3f9 100%)',
        'institution': 'linear-gradient(135deg, #053161 0%, #063B73 45%, #04274d 100%)',
        'gold-line': 'linear-gradient(90deg, transparent, #D9A441, transparent)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
