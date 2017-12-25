const path = require('path');

module.exports = {
  entry: "./assets/js/index.js",

  output: {
    path: path.resolve(__dirname, "./priv/static/js"),
    filename: "app.js"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react']
      }
    }]
  },
};
