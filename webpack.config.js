const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "/src/app.js",
    devServer: {
        static: './dist',
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename: "index.html",
            template: "src/templates/home/index.html",
            inject: 'body'
        })
    ]
};