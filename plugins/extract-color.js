const cssExtractor = require('webpack-theme-color-replacer/src/CssExtractor')
const { obj } = require('through2')

const PLUGIN_NAME = 'extract-color'

function testCssCode(cssCode, keywords = []) {
  if (typeof cssCode !== 'string') return false

  for (const word of keywords) {
    if (cssCode.includes(word)) return true
  }

  return false
}

function extractColor(options = {}) {
  return obj((file, _, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    const contents = file.contents.toString()

    const cssCodes = cssExtractor(contents).map(css => {
      const rules = css.rules.filter(cssCode => testCssCode(cssCode, options.keywords))

      if (!rules.length) return ''

      return css.selector + '{' + rules.join(';') + '}'
    })

    file.contents = new Buffer.from(cssCodes.join('\n'))

    callback(null, file)
  })
}

module.exports = extractColor
