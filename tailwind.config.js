/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            './public/index.html'
          ],
  theme: {
    extend: {
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1200px',
      'xl': '1700px',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities({
        '.underline-left-to-right': {
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
        },
        '.underline-left-to-right::before': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: '-100%',
          width: '100%',
          height: '2px',
          backgroundColor: '#FE1242', // Customize this color
          transition: 'left 0.3s ease',
        },
        '.underline-left-to-right:hover::before': {
          left: '0',
        },
      });
    },
  ],
}

