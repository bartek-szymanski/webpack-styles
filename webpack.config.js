const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',

    plugins: [new MiniCssExtractPlugin()],
    
    module: {
        rules: [

            // for each type of  file 
            {
                test: /\.(s[ac]|c)ss$/i,

                // Include CSS code in the html file in `style` tag
                // use: ['style-loader', 'css-loader', 'sass-loader'],

                // Create CSS file 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    },

    devtool: 'source-map',
}