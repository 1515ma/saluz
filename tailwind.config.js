/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        // Paleta laranja Saluz (baseada em #FF6600 e #F26522)
        brand: {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb070',
          400: '#ff8638',
          500: '#FF6600', // primary
          600: '#F26522', // secondary
          700: '#c44a17',
          800: '#9c3a18',
          900: '#7e3217',
          950: '#441708',
        },
        ink: {
          900: '#0a0a0c',
          800: '#15151a',
          700: '#1f1f26',
          600: '#2a2a33',
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,102,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.06) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at center, rgba(255,102,0,0.18) 0%, transparent 70%)',
      },
      boxShadow: {
        'brand': '0 20px 60px -15px rgba(255, 102, 0, 0.5)',
        'brand-lg': '0 30px 80px -10px rgba(242, 101, 34, 0.55)',
        'inset-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
};
