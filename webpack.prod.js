const path = require("path")
const common = require("./webpack.common")
const {merge} = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimizer: [
          new OptimizeCssAssetsWebpackPlugin(),
          new TerserPlugin(),
          new HtmlWebpackPlugin({
          template: "./src/index.html",
          minify: {
              removeAttributeQuotes: true,
              removeComments: true,
              collapseWhitespace: true
          }
      })]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css
                    "css-loader", // 2. Turns css to common js
                    'sass-loader', // 1. Turns sass to css
                ]
            },
        ]
    }
})