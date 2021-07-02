const path = require('path');

module.exports = {
  entry: './src/scrollTo.js',
  output: {
    filename: 'scrollTo.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
};