const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        home: {import: "/src/home.js", filename: "home.js"},
        tables: {import: "/src/tables.js", filename: "tables.js"},
    },
    devServer: {
        static: './dist',
        hot: true,
        port: 3000
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
            inject: 'body',
            chunks: ["home"]
        }),
        new HtmlWebpackPlugin({
            chunks: ["tables"],
            title: "Table",
            filename: "tables.html",
            template: "src/templates/tables/tables.html",
            inject: 'body',
        })
    ]
};