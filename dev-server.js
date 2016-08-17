var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack/webpack.config');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: {
    '**': 'http://localhost:8080'
  }
}));

app.use(hotMiddleware(compiler));

server.listen(4040, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://localhost:4040`);
});
