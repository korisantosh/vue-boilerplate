const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  entry: {
    app: [
      './scripts/dev-client',
      './src/main.ts'
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
