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

    const contents = file.contents.toString()

    if (contents) {
      file.contents = new Buffer.from(wrap(contents, options))
    }

    callback(null, file)
  })
}

module.exports = cssWrap
