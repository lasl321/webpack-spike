var path = require('path');

module.exports = {
    // Context for entry items
    context: path.join(__dirname, 'src'),
    entry:[
        // For es2015 environment
       'babel-polyfill',
       
       // To show that a module doesn't have to export anything
        './es6/sideeffect',
        
        // Main entry point
        './app'
    ],
    output: {
        // Output directory
        path: __dirname + '/build/',
        
        // Output file
        filename: 'bundle.js',
        
        // Path in dev server
        publicPath: "/build"
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: "./src",
    },
    module: {
        loaders: [{
            test: /.js$/,
            
            // Only convert those files in the es6 directory
            include: path.join(__dirname, '/src/es6'),
            loader: "babel-loader",

            query: {
                // Use common runtime helpers
                plugins: ['transform-runtime'],
                presets: ['es2015']
            }
    }]},
};