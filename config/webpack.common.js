const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: {
          configFile: 'tslint.json'
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader!tslint-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    })
  ]
}
