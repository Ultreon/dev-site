const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

let config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
      modules: ['components', 'node_modules'],
      extensions: ['.js', '.jsx'],
      plugins: [
          new DirectoryNamedWebpackPlugin(true)
      ]
  }
}
modules.exports = config;
