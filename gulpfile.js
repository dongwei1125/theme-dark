const { src, dest, parallel } = require('gulp')
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
  outputColorSuffix,
  cssWrapSelector,
  extractColorKeywords,
} = require('./theme.config')

function compileCss() {
  return src(scssSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssWrap({ selector: cssWrapSelector }))
    .pipe(cleanCss())
    .pipe(dest(outputDir))
}

function compileColorCss() {
  return src(scssSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssWrap({ selector: cssWrapSelector }))
    .pipe(extractColor({ keywords: extractColorKeywords }))
    .pipe(cleanCss())
    .pipe(rename({ suffix: outputColorSuffix }))
    .pipe(dest(outputColorDir))
}

function copyfont() {
  return src(fontSrc).pipe(dest(outputFontDir))
}

exports.build = parallel(compileCss, compileColorCss, copyfont)
