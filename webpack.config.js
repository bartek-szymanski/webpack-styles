const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

const webpack = require('webpack'); // to access built-in plugins 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm. Easily create HTML files to serve your bundles


module.exports = {
    mode: 'development',

    // entry: './src/index.js', // entry point (single or multiple) that webpack is using to build its internal dependency graph 
    // output: { // where to emit the bundles and how to name these files
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'my-webpack.bundle.js',
    // },
    
    module: {

        // Loaders
        // - Allows to pre-process files when they are imported or "load"ed,
        // - Kind of like “tasks” in other build tools,
        // - Are evaluated/executed from right to left or from bottom to top, 
        // - Can be chained - executed in reverse order,
        // - Can be configured with an options object, 

        // --- 
        rules: [
            // For each type of file 
            // --- 

            // Styles
            // --- 
            {
                test: /\.(sa|sc|c)ss$/i, // .scss, .sass, .css

                // Include CSS code in the html file in `style` tag
                // --- 
                // use: ['style-loader', 'css-loader', 'sass-loader'],

                use: [                    
                    {
                        // Create a separate CSS file
                        loader: MiniCssExtractPlugin.loader,
                        // options: {}
                    },
                    {
                        // Translates CSS into CommonJS
                        loader: 'css-loader',
                        // options: {}
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     postcssOptions: {
                        //         plugins: [
                        //             [
                        //                 "postcss-preset-env",
                        //                 {
                        //                     // options 

                        //                 }
                        //             ]
                        //         ]
                        //     }
                        // }
                    },
                    {
                        // Compile Sass to CSS
                        // `dart-sass` is used by default when  `sass` (not `node-sass`) npm package is installed 
                        // Note when using Dart Sass, synchronous compilation is twice as fast as asynchronous compilation by default, due to the overhead of asynchronous callbacks. To avoid this overhead, use the fibers package to call asynchronous importers from the synchronous code path.
                        loader: 'sass-loader',
                    },                    
                ],
            },

            // TypeScript
            // --- 
            {
                test: /\.ts$/, 
                use: 'ts-loader'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

    ],

    devtool: 'source-map',
}