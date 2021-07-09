const path = require('path');

module.exports = {
  entry: './src/simpleScrollTo.js',
  output: {
    filename: 'simpleScrollTo.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
};