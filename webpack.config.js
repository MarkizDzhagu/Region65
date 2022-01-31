const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

//const filename = (ext) => isDev ? '[name].[ext]' : '[name].[contenthash].[ext]';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './script/main.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {

        static: {
            directory: path.resolve(__dirname, 'app'),
        },

        compress: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: "./pages/index.html",
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop.html",
            template: './pages/shop.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/company.html",
            template: './pages/company.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price.html",
            template: './pages/price.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/payment.html",
            template: './pages/payment.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/delivery.html",
            template: './pages/delivery.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii.html",
            template: './pages/akcii.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/contacts.html",
            template: './pages/contacts.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element1.html",
            template: './pages/shop__element1.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element2.html",
            template: './pages/shop__element2.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element3.html",
            template: './pages/shop__element3.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element4.html",
            template: './pages/shop__element4.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element5.html",
            template: './pages/shop__element5.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element6.html",
            template: './pages/shop__element6.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/shop__element7.html",
            template: './pages/shop__element7.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__avtokran.html",
            template: './pages/price__avtokran.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__betononasos.html",
            template: './pages/price__betononasos.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__buldozer.html",
            template: './pages/price__buldozer.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__excavator.html",
            template: './pages/price__excavator.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__ilosos.html",
            template: './pages/price__ilosos.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__katok.html",
            template: './pages/price__katok.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__mixer.html",
            template: './pages/price__mixer.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__pogruzchik.html",
            template: './pages/price__pogruzchik.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__samosval.html",
            template: './pages/price__samosval.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__tyagach.html",
            template: './pages/price__tyagach.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/price__yamobur.html",
            template: './pages/price__yamobur.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii__element1.html",
            template: './pages/akcii__element1.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii__element2.html",
            template: './pages/akcii__element2.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii__element3.html",
            template: './pages/akcii__element3.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii__element4.html",
            template: './pages/akcii__element4.html'
        }),
        new HTMLWebpackPlugin({
            filename: "./pages/akcii__element5.html",
            template: './pages/akcii__element5.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'app/img')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: './css/styles.css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',

                generator: {
                    filename: () => {
                        return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                    }
                }
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',

                generator: {
                    filename: () => {
                        return isDev ? 'fonts/[name][ext]' : 'fonts/[name].[contenthash][ext]';
                    }
                }
            },
        ]
    }
};