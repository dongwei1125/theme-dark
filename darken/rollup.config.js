const path = require('path')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')
const { babel } = require('@rollup/plugin-babel')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  input: resolve('index.js'),
  output: {
    file: 'lib/darken.js',
    format: 'umd',
    name: 'Darken',
  },
  plugins: [babel({ presets: ['@babel/preset-env'] }), commonjs(), terser()],
}
