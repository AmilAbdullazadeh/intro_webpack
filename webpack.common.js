const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        second: "./src/second.js",
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    plugins: [ new CleanWebpackPlugin() ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Enject styles into DOM
                    "css-loader", // 2. Turns css to common js
                    'sass-loader', // 1. Turns sass to css
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|doc)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                },
            }
        ]
    },
}