module.exports = {
    purge: [
        './dist/**/*.html',
        './src/**/*.html',
        './src/**/*.njk',
      ],
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
  },
}
