const webpack = require('webpack');
const ora = require('ora');

const prodConfig = require('../config/webpack.prod');

const spinner = ora('Building project');

spinner.start();

webpack(prodConfig, (err, status) => {
  if (err) {
    spinner.fail();
    throw err;
  }

  spinner.succeed();

  process.stdout.write('\n' + status.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
});
