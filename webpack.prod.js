const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home.js',
        introduce: './src/introduce.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'home',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'introduce',
            filename: 'introduce.html',
            chunks: ['introduce']
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

    },
    mode: 'production'
}