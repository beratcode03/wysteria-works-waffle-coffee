export default {

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {

      colors: {

        ivory: {

          DEFAULT: '#FAF7F2',

          50: '#FDFCF9',

          100: '#FAF7F2',

          200: '#F0E8DA',

          300: '#E4D8C8',

        },

        plum: {

          DEFAULT: '#5A3E2B',

          50: '#B99B82',

          100: '#9F8067',

          200: '#86674F',

          300: '#6E503A',

          400: '#5A3E2B',

          500: '#4A3021',

          600: '#382217',

        },

        espresso: {

          DEFAULT: '#2C1A0E',

          50: '#7A6352',

          100: '#5D4A38',

          200: '#4A3828',

          300: '#2C1A0E',

          400: '#1A0E06',

        },

        mauve: {

          DEFAULT: '#C4B09A',

          light: '#DDD0BE',

          dark: '#A89070',

        },

        brass: {

          DEFAULT: '#B7684A',

          light: '#D39575',

          dark: '#87432F',

        },

        sage: {

          DEFAULT: '#B0C4B8',

          light: '#D0DDC8',

          dark: '#8FA898',

        },

      },

      fontFamily: {

        serif: ['Fraunces', 'Georgia', 'serif'],

        sans: ['Mulish', 'system-ui', 'sans-serif'],

      },

      letterSpacing: {

        'wide-2': '0.15em',

        'wide-3': '0.22em',

      },

      animation: {

        'fade-up': 'fadeUp 0.8s ease-out forwards',

        'fade-in': 'fadeIn 1s ease-out forwards',

        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',

        'spin-slow': 'spin 18s linear infinite',

        'spin-slower': 'spin 32s linear infinite',

        marquee: 'marquee 30s linear infinite',

        float: 'floatY 7s ease-in-out infinite',

        'float-slow': 'floatY 11s ease-in-out infinite',

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

        slowZoom: {

          '0%': { transform: 'scale(1)' },

          '100%': { transform: 'scale(1.06)' },

        },

        marquee: {

          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-50%)' },

        },

        floatY: {

          '0%, 100%': { transform: 'translateY(0) rotate(var(--float-r, 0deg))' },

          '50%': { transform: 'translateY(-16px) rotate(var(--float-r, 0deg))' },

        },

      },

    },

  },

  plugins: [],

};
