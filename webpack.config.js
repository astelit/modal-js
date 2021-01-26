const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const glob = require('glob')

const isDev = process.env.NODE_ENV === 'development' // const isProd = !isDev;
const targetIsIe = isDev ? 'web' : ['web', 'es5']
const entryIsIe = isDev ? './index.js' : [
  'whatwg-fetch',
  'core-js/stable',
  'regenerator-runtime/runtime',
  './index.js'
]

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core')
    }
  },
  target: targetIsIe,
  mode: 'development',
  stats: 'errors-only',
  entry: {
    index: entryIsIe,
  },
  devtool: isDev? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 4200,
    hot: true,
    open: false,
    noInfo: true
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets',
          to: `${path.resolve(__dirname, 'dist')}/assets`
        },
      ],
    }),
    ...glob.sync(`${path.resolve(__dirname, 'src')}/*.html`).map((htmlFile) => {
      return new HtmlWebpackPlugin({
        filename: path.basename(htmlFile),
        template: htmlFile
      });
    }),
    new MiniCssExtractPlugin({
      filename: `css/${filename('css')}`
    }),
    new ESLintPlugin()
  ],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      grid: 'autoplace'
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime'
              ]
            }
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: `[path]/[name].[ext]`,
          }
        }]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `[path]/[name].[ext]`,
          },
        }]
      },
      {
        test: /\.(mp3|mp4|webp)(\?v=\d+\.\d+\.\d+)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[path]/[name].[ext]`,
            },
          },
        ],
      },
    ]
  }
}
