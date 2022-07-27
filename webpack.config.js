const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: '/',
        filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
};