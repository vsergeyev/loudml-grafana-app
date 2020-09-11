const baseWebpackConfig = require('./webpack.base.conf');

var conf = baseWebpackConfig;
conf.mode = 'development';

module.exports = baseWebpackConfig;
