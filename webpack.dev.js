const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './env/.env.development'),
    }),
  ],
});
