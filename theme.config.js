module.exports = {
  scssSrc: './src/*.scss',
  fontSrc: './src/fonts/**',
  outputDir: './lib',
  outputFontDir: './lib/fonts',
  outputColorDir: './lib',
  outputCssExt: 'color',
  wrapSelector: 'body.dark', // css-wrap
  extractColorKeywords: ['--ec-ignore-', '#', 'rgb', 'transparent'], // extract-color
}
