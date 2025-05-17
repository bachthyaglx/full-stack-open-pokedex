<<<<<<< HEAD
=======
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
>>>>>>> 74880f6 (Initial push of full-stack-open-pokedex)
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
<<<<<<< HEAD
=======
  mode: 'production',
>>>>>>> 74880f6 (Initial push of full-stack-open-pokedex)
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
<<<<<<< HEAD
=======
  devtool: 'source-map',
>>>>>>> 74880f6 (Initial push of full-stack-open-pokedex)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
