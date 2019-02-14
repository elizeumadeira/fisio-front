const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path: __dirname + '/public',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
            // jQuery: 'modules/startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js',
            // bootstrap: 'modules/startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
          })
    ],
    devServer: {
        contentBase: "./public",
        port: 9000,
        historyApiFallback: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()
                'sass-loader'
            ]
        }, {
            // test: /\.(png|svg|jpg|gif)$/,
            test: /\.(ttf|eot|svg|gif|woff|woff2|png|svg|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: ['file-loader']
        }]
    }
}