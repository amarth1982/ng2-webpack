var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/node_modules/, /\.d\.td$/]
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
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