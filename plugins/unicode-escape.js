const { obj } = require('through2')
const { PluginError } = require('gulp-util')

const PLUGIN_NAME = 'unicode-escape'

function encodeChar(string) {
  /**
   * (?<!-) 非负号 justify-content
   * ([^;\}]+) 至少一个非 ; 或 }
   */
  const contentReg = /(?<!-)content\s*:\s*([^;\}]+)/g
  /**
   * 单字节 \x00-\xff
   * 多字节 ^\x00-\xff
   */
  const multiByteReg = /[^\x00-\xff]/g

  string = string.replace(contentReg, match => {
    return match.replace(multiByteReg, m => {
      return '\\' + m.charCodeAt(0).toString(16)
    })
  })

  return string
}

function unicodeEscape() {
  return obj((file, _, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    const contents = file.contents.toString()

    file.contents = new Buffer.from(encodeChar(contents))

    callback(null, file)
  })
}

module.exports = unicodeEscape
