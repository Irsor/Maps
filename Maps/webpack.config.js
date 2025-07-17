const path = require('path');

const bundleFolder = "wwwroot/js/dist";

module.exports = {
    entry: "./wwwroot/js/site.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, bundleFolder)
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    }
};