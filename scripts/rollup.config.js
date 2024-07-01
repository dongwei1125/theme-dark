const path = require('path')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')
const { babel } = require('@rollup/plugin-babel')
const { scripts } = require('../theme.config')

const resolve = dir => path.join(__dirname, dir)
const { outputDir } = scripts

module.exports = [
  {
    input: resolve('darken/index.js'),
    output: {
      file: `${outputDir}/darken.js`,
      format: 'umd',
      name: 'Darken',
    },
    plugins: [babel({ presets: ['@babel/preset-env'] }), commonjs(), terser()],
  },
  {
    input: resolve('dark-mode.js'),
    output: {
      file: `${outputDir}/dark-mode.js`,
      format: 'iife',
    },
    plugins: [babel({ presets: ['@babel/preset-env'] }), commonjs(), terser()],
  },
]
