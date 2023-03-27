module.exports = {
  content: ["./*/*/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [       
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
};
