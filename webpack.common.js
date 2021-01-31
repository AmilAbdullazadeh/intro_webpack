const path = require("path")


module.exports = {
    entry: {
        main: "./src/index.js",
        second: "./src/second.js",
    },
    module: {
        rules: [
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