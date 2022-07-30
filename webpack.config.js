const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        port: 3000
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};