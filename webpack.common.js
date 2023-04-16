const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new Dotenv({ path: path.resolve(__dirname, 'env/.env') }),
    new webpack.ProgressPlugin(),
  ],

  stats: {
    preset: 'minimal',
    errorDetails: true,
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      styles: path.resolve(__dirname, './src/styles'),
      pages: path.resolve(__dirname, './src/pages'),
      utils: path.resolve(__dirname, './src/utils'),
      libs: path.resolve(__dirname, './src/libs'),
    },
  },
};
