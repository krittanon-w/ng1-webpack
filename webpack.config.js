var path = require('path')
// var projectRoot = path.resolve(__dirname)

module.exports = {
    entry: path.resolve(__dirname, "src/app.module.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js",
        // publicPath: "/"
        // filename: "[name].bundle.js",
		// chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: false
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    devtool: "#inline-source-map"
}