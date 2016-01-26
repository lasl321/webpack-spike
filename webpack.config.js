var path = require('path');
var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';

module.exports = {
    // Context for entry items
    context: path.join(__dirname, 'src'),
    entry: {
        vendors: [
            // For es2015 environment
            'babel-polyfill',
            'react',
            'jquery'
        ],
        app: [
            // For auto reload
            "webpack-dev-server/client?http://localhost:8080",

            // Main entry point
             './app.jsx'
        ]
    },
    output: {
        // Output directory
        path: path.join(__dirname, 'build'),
        
        // Output file
        filename: production ? 'bundle-[hash]' : 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
        
        // Path in dev server
        publicPath: "/build"
    },
    debug: !production,
    devtool: !production ? 'source-map' : false,
    devServer: {
        contentBase: "./src",
    },
    module: {
        loaders: [{
            test: /.jsx$/,
            
            include: path.join(__dirname, 'src'),
            loader: "babel-loader",

            query: {
                presets: ['es2015', 'react']
            }
    }, {
        test: /.sass$/,
        
        loader: 'style!css!sass'
    }, {
        test: /.css$/,
        
        loader: 'style!css'
    }, {
       test: /\.(png|jpg)$/,
       loader: 'url?limit=25000'
    }]},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};