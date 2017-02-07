var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: './tsconfig.json' }
                }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src', // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        })
    ],
    output: {
        path: 'dist',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
}