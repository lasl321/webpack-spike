module.exports = {
    context: 'src',
    entry: './app',
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: "/build"
    }
};