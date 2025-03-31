module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1500px',
    },
    extend: { 
      width: {
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
      },
      top: {
        '2': '0.5rem',
        '3': '3.75rem',
        '4': '1rem',
      },
      colors: {
        'orange': '#ff6600',
      },
      margin: {
        '0.5':'0.125rem',
        '1':  '0.25rem',
        '1.5':'0.375rem',
        '2':  '0.5rem',
        '2.5':'0.625rem',
        '3':  '0.75rem',
        '3.5':'0.875rem',
        '4':  '1rem',
        '5':  '1.25rem',
        '6':  '1.5rem',
        '7':  '1.75rem',
        '8':  '2rem',
        '9':  '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      letterSpacing: {
        '02': '.02em',
        '05': '.05em',
        '10': '.10em',
        '15': '.15em',
        '20': '.20em',
        '25': '.25em',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
      }
    }
  },
  variants: {},
  plugins: []
}
