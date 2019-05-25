const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
  },

  module: {
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                // css-loader文件处理
                fallback: 'style-loader',
                use: [
                    'css-loader'
                ]
            })
            // use: ['style-loader', 'css-loader']
        },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // es6 - es5
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      log$: path.resolve(__dirname, 'src/utils/log.js')
    },
    extensions: ['.js', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ]
}