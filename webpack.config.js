var path = require('path');

module.exports = {
    // Context for entry items
    context: path.join(__dirname, 'src'),
    entry:[
        // For es2015 environment
       'babel-polyfill',
       
        // For auto reload
        "webpack-dev-server/client?http://localhost:8080",
        
        // Main entry point
        './app.jsx'
    ],
    output: {
        // Output directory
        path: path.join(__dirname, 'build'),
        
        // Output file
        filename: 'bundle.js',
        
        // Path in dev server
        publicPath: "/build"
    },
    debug: false,
    devtool: 'source-map',
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
    }]},
};