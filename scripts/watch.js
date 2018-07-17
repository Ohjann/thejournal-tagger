process.env.NODE_ENV = "production";

const fs = require("fs-extra");
const webpack = require("webpack");
const paths = require("../config/paths");
const config = require("../config/webpack.config.prod.js");

// removes react-dev-utils/webpackHotDevClient.js at first in the array
config.entry.shift();

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
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
