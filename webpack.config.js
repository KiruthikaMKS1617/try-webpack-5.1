const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/", //"https://some-cdn.com/", defaultval = "auto"
  },
  mode: "none",
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
    ],
  },
};
