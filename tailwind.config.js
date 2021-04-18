/* eslint-disable max-len */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F37001',
          hard: '#c95c00',
          md: '#ffa85e',
          l: '#facb9d',
        },
        white: {
          DEFAULT: '#FFFFFF',
          custom: '#F8F7F9',
        },
        yellow: {
          custom: '#ffd04f',
        },
        purple: {
          custom: '#7f6594',
        },
        black: {
          DEFAULT: '#000',
          body: '#141414',
          navbar: '#0c0c0c',
        },
        red: {
          primary: 'rgb(229, 9, 20)',
          'primary-d': 'rgb(173, 0, 9)',
        },
        gray: {
          primary: '#8c8c8c',
          'primary-d': '#333',
        },
      },
      spacing: {
        '1rem': '1rem',
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '3.5rem': '3.5rem',
        '4rem': '4rem',
        '4.5rem': '4.5rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '6.8rem': '6.8rem',
        '7rem': '7rem',
        '8rem': '8rem',
        '9rem': '9rem',
        '10rem': '10rem',
        '12rem': '12rem',
        '14rem': '14rem',
        '16rem': '16rem',
        '18rem': '18rem',
        '20rem': '20rem',
        '22rem': '22rem',
        '24rem': '24rem',
        '26rem': '26rem',
        '28rem': '28rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '70rem': '70rem',
        '80rem': '80rem',
        '90rem': '90rem',
        '100rem': '100rem',
        '1/9': '11.111111%',
        '1/10': '10%',
        '9.74%': '9.74%',
      },
      fontSize: {
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        22: '2.2rem',
        24: '2.4rem',
        26: '2.6rem',
        28: '2.8rem',
        30: '3rem',
        40: '4rem',
        50: '5rem',
        56: '5.6rem',
        100: '10rem',
      },
      boxShadow: {
        'inner-md': 'inset 0 2px 8px 0 rgba(173, 80, 0, 0.8)',
        custom: '0px 2px 8px 3px rgba(0, 0, 0, 0.2)',
      },
      lineHeight: {
        100: '10rem',
        50: '5rem',
        40: '4rem',
        56: '5.6rem',
        60: '6rem',
        65: '6.5rem',
        70: '7rem',
      },
      zIndex: {
        negative1: '-1',
        1: '1',
        2: '2',
      },
      flex: {
        carousel: '1 0 100%',
        listFilm: '1 0 calc(100%)',
      },
      order: {
        0: '0',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backgroundImage: {
        navbar: 'linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))',
        listFilmAll:
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.2) 10%,rgba(20,20,20,.4) 15%,rgba(20,20,20,0.8) 25%,#141414 45%,#141414 100%)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      margin: ['first', 'last'],
      zIndex: ['hover'],
      transformOrigin: ['first', 'last'],
      visibility: ['first'],
      opacity: ['first'],
    },
  },
  plugins: [],
};
