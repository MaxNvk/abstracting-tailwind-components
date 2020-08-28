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
  experimental: 'all',
  future: {
      removeDeprecatedGapUtilities: true,
  },
}
