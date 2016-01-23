module.exports = {
    context: 'src',
    entry: './app',
    output: {
        path: __dirname + '/build/[hash]',
        filename: 'bundle.js',
        publicPath: "http://cdn.example.com/assets/[hash]/"
    }
};