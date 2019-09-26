const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'pdfkit',
    libraryExport: 'default',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      fs: 'pdfkit/js/virtual-fs.js',
    },
  },
  module: {
    rules: [
      {
        enforce: 'post',
        test: /fontkit[/\\]index.js$/,
        loader: 'transform-loader?brfs',
      },
      {
        enforce: 'post',
        test: /unicode-properties[/\\]index.js$/,
        loader: 'transform-loader?brfs',
      },
      {
        enforce: 'post',
        test: /linebreak[/\\]src[/\\]linebreaker.js/,
        loader: 'transform-loader?brfs',
      },
      { test: /src[/\\]assets/, loader: 'arraybuffer-loader' },
      { test: /\.afm$/, loader: 'raw-loader' },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /src[/\\]index\.js$/, // not working
      }),
    ],
  },
};
