/**
 * react-file - webpack.config.js
 * Created by mengdesen on 15/5/15.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin()
    ]
};