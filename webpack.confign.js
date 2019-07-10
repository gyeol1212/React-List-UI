const path = require('path');

module.exports = {
  entry: './src/ListUI.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },
  mode: 'none'
};
