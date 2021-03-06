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
            title: 'test',
            filename: '[name].html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

    },
    devtool: 'inline-souce-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true
    }
}