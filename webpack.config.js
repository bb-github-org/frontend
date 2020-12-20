const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
            presets: [
                ['@babel/preset-env', { "targets": "defaults" } ],
                '@babel/preset-react',
            ]
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
}
