const plugin = require('tailwindcss/plugin')
const px2rem = (px) => px / 16 + 'rem'
const font = (fontSize, lineHeight) => [px2rem(fontSize), lineHeight / fontSize]

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        /**
         * Naming convention:
         * fontSize/lineHeight: font(fontSize, lineHeight)
         */
        '42/50': font(42, 50),
        '40/48': font(40, 48),
        '30/36': font(30, 36),
        '20/24': font(20, 24),
        '16/19': font(16, 19),
        '14/17': font(14, 17),
        '14/14': font(14, 14),
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-skeleton': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.animation-skeleton:before': {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: 'translateX(-100%)',
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
          animation: 'skeleton 2.5s infinite',
          content: '""',
        },
        '@keyframes skeleton': {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      })
    }),
  ],
}
