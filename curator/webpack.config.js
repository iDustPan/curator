
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        // When using the HTML5 History API, the index.
        // html page will likely have to be served in place of any 404 responses.
        // Enable this by passing:
        historyApiFallback: true,
        contentBase: './'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
