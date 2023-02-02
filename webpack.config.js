const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/styles/styles.scss", "./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: path.resolve(__dirname, "docs", "assets") },
      ],
    }),
  ],
};
