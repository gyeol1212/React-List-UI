var path = require('path');
module.exports = {
  entry: './src/ListUI.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
