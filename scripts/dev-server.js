var path = require('path')
var express = require('express')
var webpack = require('webpack')

var webpackConfig = require('../config/webpack.dev')

var url = 'http://localhost'
var port = 8080

var app = express()
var compiler = webpack(webpackConfig)

var assetsPublicPath = '/'
var assetsSubDirectory = 'static'

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)
app.use(hotMiddleware)

var staticPath = path.posix.join(assetsPublicPath, assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = url + ':' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
