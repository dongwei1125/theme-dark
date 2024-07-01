const cssExtractor = require('./CssExtractor')
const { obj } = require('through2')

const PLUGIN_NAME = 'extract-color'
const specialComments = '/* extract-color ignore */'

function testCssCode(cssCode, options) {
  const keywords = options.keywords || []
  const ignoreSpecialComments = options.ignoreSpecialComments || false

  if (typeof cssCode !== 'string') return false

  for (const word of keywords) {
    if (cssCode.includes(word)) return true
  }

  if (!ignoreSpecialComments && cssCode.includes(specialComments)) return true

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

    const cssCodes = cssExtractor(contents, options).map(css => {
      const rules = css.rules.filter(cssCode => testCssCode(cssCode, options))

      if (!rules.length) return ''

      return css.selector + '{' + rules.join(';') + '}'
    })

    file.contents = new Buffer.from(cssCodes.join('\n'))

    callback(null, file)
  })
}

module.exports = extractColor
