const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.useable\.css$/,
                use: [
                    {
                        loader: "style-loader/useable"
                    },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.png$/,
                use: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                use: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};

module.exports = config;