const propertiesOrder = require('./postcss-properties-order.js');

module.exports = {
    plugins: [
        // require('postcss-preset-env'),
        [
            "postcss-preset-env",
            {
                // options

            },
        ],
        [
            'postcss-sorting',
            {
                // order: [
                //     'custom-properties',
                //     'dollar-variables',
                //     'declarations',
                //     'at-rules',
                //     'rules',
                // ],
                'properties-order': propertiesOrder, // 'alphabetical', // ["array", "of", "unprefixed", "property", "names"]
                // 'unspecified-properties-position': 'bottom',
            },
        ]
    ]
};