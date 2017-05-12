var path = require('path');

module.exports = {

    entry: './index.js',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: [require('babel-plugin-transform-class-properties')]
                }
            }
        ]
    },

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js'],
    }

};