var config = {
    entry: './main.jsx',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style!css!sass"
        }]
    }
}

module.exports = config;