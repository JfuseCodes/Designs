const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        nav: './src/components/elements/navbar.js',
        home: './src/components/elements/home.js',
        menu: './src/components/elements/menu.js',
        
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Iron shake restaurant',
        }),
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ],                
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};