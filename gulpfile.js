const { series, src, dest } = require('gulp')
const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

const cssWrap = require('./plugins/css-wrap')
const extractColor = require('./plugins/extract-color')

const {
  scssSrc,
  fontSrc,
  outputDir,
  outputFontDir,
  outputColorDir,
  outputCssExt,
  wrapSelector,
  extractColorKeywords,
} = require('./theme.config')

function compile() {
  return src(scssSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssWrap({ selector: wrapSelector }))
    .pipe(cleanCss())
    .pipe(dest(outputDir))
    .pipe(extractColor({ keywords: extractColorKeywords }))
    .pipe(cleanCss())
    .pipe(rename(path => (path.basename += `.${outputCssExt}`)))
    .pipe(dest(outputColorDir))
}

function copyfont() {
  return src(fontSrc).pipe(dest(outputFontDir))
}

exports.build = series(compile, copyfont)
