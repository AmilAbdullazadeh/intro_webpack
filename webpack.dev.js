const path = require("path")
const common = require("./webpack.common")
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
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
        ]
    }
})