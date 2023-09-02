/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }], // uh ... did I put these extra ones here? 
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }], // montserrat could look good here. REM is nice too
      },
      maxWidth: {
        '8xl': '88rem',
      },
      dropShadow: {
        'logo': '0 35px 35px rgba(255, 255, 255, 255)',
      },
      boxShadow: {
        'avatar' : '0px 0px 99px #9994cc54',
        'cool'   : '0px 0px 88px #253b6157'
      },
      colors: {
        'darkerish-translucent': 'rgb(0 0 0 / 15%)',
        'darkerish': '#0b1423',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            img: {
              // Remove margins until Next/Image issue is resolved
              // https://github.com/vercel/next.js/issues/19817
              "margin-top": "0",
              "margin-bottom": "0",
            },
          },
        },
      }),
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
  
}
