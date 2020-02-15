const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "screens_test.js",
    path: path.join( __dirname, "public")
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join( __dirname, "public"),
    compress: true,
    watchContentBase: true
  }
};
