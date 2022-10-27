const webpack = require('webpack');
const path = require('path');
var config = {
    entry: './main.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
    },

    devServer: {
        historyApiFallback:true
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
}

module.exports = config;