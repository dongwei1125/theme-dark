const { src, dest, parallel } = require('gulp')
const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

const cssWrap = require('./plugins/css-wrap')
const extractColor = require('./plugins/extract-color')
const unicodeEscape = require('./plugins/unicode-escape')

const {
  scssSrc,
  fontSrc,
  outputDir,
  outputFontDir,
  outputColorDir,
  outputColorSuffix: suffix,
  cssWrap: { selector },
  extractColor: { keywords, ignoreSpecialComments },
} = require('./theme.config')

function compileCss() {
  return src(scssSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(unicodeEscape())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssWrap({ selector }))
    .pipe(cleanCss())
    .pipe(dest(outputDir))
}

function compileColorCss() {
  return src(scssSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssWrap({ selector }))
    .pipe(extractColor({ keywords, ignoreSpecialComments }))
    .pipe(cleanCss())
    .pipe(rename({ suffix }))
    .pipe(dest(outputColorDir))
}

function copyfont() {
  return src(fontSrc).pipe(dest(outputFontDir))
}

exports.build = parallel(compileCss, compileColorCss, copyfont)
