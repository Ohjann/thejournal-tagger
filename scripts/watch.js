process.env.NODE_ENV = "production";

const fs = require("fs-extra");
const webpack = require("webpack");
const paths = require("../config/paths");
const config = require("../config/webpack.config.js");

// removes react-dev-utils/webpackHotDevClient.js at first in the array
config.entry.content.shift();

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true
  });
}

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(
    stats.toString({
      chunks: false,
      colors: true
    })
  );
});
