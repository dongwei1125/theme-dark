module.exports = {
  scssSrc: './src/*.scss',
  fontSrc: './src/fonts/**',
  outputDir: './lib',
  outputFontDir: './lib/fonts',
  outputColorDir: './lib',
  outputColorSuffix: '.color',
  cssWrapSelector: '.dark', // css-wrap
  // extract-color
  extractColorKeywords: [
    '/* extract-color ignore */',
    '#',
    'rgb',
    'transparent',
    'color: white',
    'background: none',
  ],
}
