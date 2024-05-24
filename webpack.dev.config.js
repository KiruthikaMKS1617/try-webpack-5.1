const path = require("path");
// in development phase - we should optimize the performance of the build process, in order to improve developer experience
// const TerserPlugin = require("terser-webpack-plugin"); - not req since minification consumes time for large apps
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); -  not req since minification consumes time for large apps
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    "kiwi-img": "./src/kiwi-img.js",
  },
  output: {
    filename: "[name].bundle.js", // [contenthash] - not req for dev envs
    path: path.resolve(__dirname, "./dist"),
    publicPath: "", //"https://some-cdn.com/", defaultval = "auto"
  },
  mode: "development",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
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
      filename: "hello-world.html",
      chunks: ["hello-world"],
      title: "Hello world",
      template: "src/page-template.hbs",
      description: "Hello world",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ["kiwi-img"],
      title: "Kiwi",
      template: "src/page-template.hbs",
      description: "Kiwi",
      minify: false,
    }),
  ],
};
