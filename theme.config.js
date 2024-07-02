module.exports = {
  scssSrc: './src/*.scss',
  fontSrc: './src/fonts/**',
  outputDir: './lib',
  outputFontDir: './lib/fonts',
  outputColorDir: './lib',
  outputColorSuffix: '.color',
  cssWrap: {
    selector: '.dark',
  },
  extractColor: {
    keywords: ['#', 'rgb', 'transparent', 'color: white', 'background: none'],
    ignoreSpecialComments: false,
  },
  scripts: {
    outputDir: 'utils',
    storageKey: 'el-theme-appearance',
  },
}
