const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  entry: {
    app: ['./src/main.ts']
  },
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});
