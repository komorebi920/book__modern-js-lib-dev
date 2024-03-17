const { banner, plugins } = require('./rollup');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner,
  },
  plugins,
};
