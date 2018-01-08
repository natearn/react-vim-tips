const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactVimTips',
  },
  resolve: {
    extensions: ['.js','.jsx','.svg'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname,'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['url-loader'],
      },
    ],
  },
}
