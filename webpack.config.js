var path = require("path");
var webpack = require("webpack");

module.exports = {
  "context": path.resolve(__dirname, "./_typescript/src/org/western.oa-bsa"),
  "devtool": "source-map",
  "entry": {
    //main entry
    "main": "./main.ts",

    //vendor entry
    "vendor": "./vendor.ts"
  },
  "module": {
    "loaders": [
      {
        "test": /\.ts$/,
        "loader": "ts-loader"
      }
    ]
  },
  "output": {
      "path": "./js/build",
      "filename": "[name].bundle.js"
  },
  "plugins": [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    require("webpack-fail-plugin")
  ],
  "resolve": {
    "alias": {
      "angular": path.resolve(__dirname, "./node_modules/angular/angular"),
      "bootstrap-sass": path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/javascripts/bootstrap"),
      "isotope": path.resolve(__dirname, "./node_modules/isotope-layout/dist/isotope.pkgd"),
      "jquery": path.resolve(__dirname, "./node_modules/jquery/src/jquery")
    },
    "extensions": ["", ".webpack.js", ".web.js", ".js", ".ts"],
    "modulesDirectories": ["node_modules"]
  }
};