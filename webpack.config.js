var webpack = require("webpack");
var path  = require("path");

var DIST_PATH = path.resolve(__dirname, "src/client/public");
var SRC_PATH = path.resolve(__dirname, "src/client/app");

var config = {
    entry : SRC_PATH + "/index.jsx",
    mode: 'production',
    output: {
        path: DIST_PATH,
        filename: "bundle.js",
    },
    watch: true,
    module:{
        rules: [
            {
                test: /\.jsx?/,
                include: SRC_PATH,
                loader: "babel-loader",
                query : {
                    presets:["react", "es2015"]
                },
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

};

module.exports = config;
