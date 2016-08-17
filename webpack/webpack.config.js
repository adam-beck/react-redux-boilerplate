const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '..', 'src'),
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV === 'production' ? JSON.stringify('production') : JSON.stringify('development')
    })
  ]
};
