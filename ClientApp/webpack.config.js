'use strict';

const webpack = require('webpack');

// Webpack uses this to work with directories
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const WebpackNotifierPlugin = require('webpack-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';
console.log('development mode:', devMode);

const buildPath = '../wwwroot/dist';
const publicPath = '/dist/';

let cleanOptions = {
  verbose: true,
  dangerouslyAllowCleanPatternsOutsideProject: true,
  dry: false
};

const config = {
  mode: process.env.NODE_ENV,
  // https://webpack.js.org/concepts/#entry
  entry: {
    app: ['./src/js/app.js']
  },
  // https://webpack.js.org/concepts/output/
  output: {
    path: path.resolve(__dirname, buildPath),
    //filename: devMode ? '[name].js' : '[name].[hash].js',
    filename: '[name].js',
    publicPath: publicPath
  },

  // https://webpack.js.org/concepts/modules/
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery']
        }
      },
      {
        // Apply rule for .js
        test: /\.js$/,
        exclude: /(node_modules)/,
        // Set loaders to transform files.
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Apply rule for .css files
        test: /\.css$/,
        // Set loaders to transform files.
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')]
              }
            }
          }
        ]
      }
      // {
      //   // Apply rule for images
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   // Set loaders to transform files.
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         outputPath: 'images'
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         // optipng.enabled: false will disable optipng
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.90],
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         // the webp option will enable WEBP
      //         webp: {
      //           quality: 75
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   // Apply rule for fonts files
      //   test: /\.(woff|woff2|ttf|otf|eot)$/,
      //   // Set loaders to transform files.
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         outputPath: 'fonts'
      //       }
      //     }
      //   ]
      // }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // new HtmlWebpackPlugin({
    //     minify: false,
    //     inject: true
    // }),
    // new HtmlWebpackPlugin({
    //     inject: false,
    //     minify: false,
    //     template: './src/_LayoutTemplate.ejs',
    //     filename: '../../Views/Shared/_Layout.cshtml'
    // }),
    // new CopyWebpackPlugin({
    //     patterns: [
    //         { from: './dist/*.*', to: '../../wwwroot/dist/', force: true }
    //     ],
    //     options: {
    //       concurrency: 100,
    //     },
    //   }),
    new WebpackNotifierPlugin({ title: 'Webpack', alwaysNotify: true })
    //new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: !devMode,
    emitOnErrors: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        terserOptions: { compress: { pure_funcs: ['console.log', 'console.debug', 'console.info'] } }
      }),
      new CssMinimizerPlugin({
        test: /\.css(\?.*)?$/i,
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  stats: {
    // copied from `'minimal'`
    all: false,
    modules: true,
    errors: true,
    warnings: true,
    // our additional options
    assets: true,
    assetsSort: 'field',
    colors: true,
    env: true,
    entrypoints: true,
    reasons: true,
    source: true,
    moduleTrace: true,
    errorDetails: true,
    builtAt: true,
    publicPath: true
  }
};

module.exports = config;
