const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const webpackMidware = require("webpack-dev-middleware");
const webpackHotMidware = require("webpack-hot-middleware");

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.use(
  webpackMidware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  })
);
app.use(webpackHotMidware(compiler));

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
