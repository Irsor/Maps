const path = require('path');

const bundleFolder = "wwwroot/js/dist";

module.exports = {
    entry: "./wwwroot/js/site.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, bundleFolder)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    }
};