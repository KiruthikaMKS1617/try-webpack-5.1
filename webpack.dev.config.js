const path = require("path");
// in development phase - we should optimize the performance of the build process, in order to improve developer experience
// const TerserPlugin = require("terser-webpack-plugin"); - not req since minification consumes time for large apps
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); -  not req since minification consumes time for large apps
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // [contenthash] - not req for dev envs
    path: path.resolve(__dirname, "./dist"),
    publicPath: "", //"https://some-cdn.com/", defaultval = "auto"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 400 * 1024, // 400kb // usually we use 1kb (REF:xmp-app)
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  //Terser is an industry-standard minifier for JavaScript code.
  plugins: [
    // new TerserPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "styles.[contenthash].css",
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello world",
      template: "src/index.hbs",
      description: "Some description",
    }),
  ],
};
