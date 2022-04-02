const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
      index_login: path.resolve(__dirname, './src/index_login.js'),
      index_register: path.resolve(__dirname, './src/index_register.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/profile.html'), // шаблон
            filename: 'index.html', // название выходного файла
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/login.html'),
            filename: 'login.html',
            chunks: ['index_login']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/register.html'),
            filename: 'register.html',
            chunks: ['index_register']
        }),
        new CleanWebpackPlugin(),
    ], 
    devtool: "source-map",
    module: {
        rules: [
           // JavaScript
           {
             test: /\.js$/,
             exclude: /node_modules/,
             use: ['babel-loader'],
           },
           {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],  //(если вы используете windows7, строку 'sass-loader' удалите.)
            },
            {
                test: /\.(html)$/,
                include: path.join(__dirname, 'src/views'),
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            }
         ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        //contentBase: path.resolve(__dirname, 'dist'),
        static: './dist',
        open: true, compress: true, hot: true, port: 8080,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/].*\.js$/,
                    chunks: 'all'
                }
            }
        }
    }   
}
