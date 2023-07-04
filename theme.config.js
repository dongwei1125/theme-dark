module.exports = {
  scssSrc: './src/*.scss',
  fontSrc: './src/fonts/**',
  outputDir: './lib',
  outputFontDir: './lib/fonts',
  outputColorDir: './lib',
  outputCssExt: 'color',
  wrapSelector: 'html.dark', // css-wrap
  extractColorKeywords: ['--ec-ignore-', '#', 'rgb', 'transparent', 'background:0 0'], // extract-color
}
