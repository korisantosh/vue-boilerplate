const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const commonConfig = require('./webpack.common');

const rootPath = path.join(__dirname, '..');
const distPath = path.join(rootPath, 'dist');

module.exports = merge(commonConfig, {
  output: {
    path: distPath,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: rootPath,
      verbose: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
});
