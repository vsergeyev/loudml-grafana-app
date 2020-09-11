const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: resolve('src'),
  entry: {
    './module': './module.ts',
    './panel/module': './panel/module.ts',
    './datasource/module': './datasource/module.ts'
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    libraryTarget: 'amd',
    publicPath: '/'
  },
  externals: [
    'lodash',
    'jquery',
    'moment',
    'slate',
    'emotion',
    'prismjs',
    'slate-plain-serializer',
    '@grafana/slate-react',
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'rxjs',
    'd3',
    'angular',
    '@grafana/ui',
    '@grafana/runtime',
    '@grafana/data',
    function(context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  // stats: 'none',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
      { from: 'img/*' },
      { from: 'panel/plugin.json' },
      { from: 'datasource/plugin.json' },
    ])
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /jquery\.flot\.(?!events)/,
        loaders: [
          'imports-loader?jQuery=jquery'
        ]
      },
      {
        test: /jquery\.flot\.events/,
        loaders: [
          'imports-loader?jQuery=jquery,lodash=lodash,angular=angular,tetherDrop=tether-drop'
        ]
      }
    ]
  }
}
