const wrap = require('css-wrap')
const { obj } = require('through2')
const { PluginError } = require('gulp-util')

const PLUGIN_NAME = 'css-wrap'

function cssWrap(options = {}) {
  return obj((file, _, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    var contents = ''

    try {
      contents = wrap(file.contents.toString(), options)
    } catch { } // eslint-disable-line

    file.contents = new Buffer.from(contents)

    callback(null, file)
  })
}

module.exports = cssWrap
