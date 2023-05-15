const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"],
            targets: {
                browsers: ["last 2 versions", "ie 11"],
            }
        },
    }
};

const cssLoader = {
    test: /\.css$/i,
    include: path.resolve(__dirname, "src"),
    use: ["style-loader", "css-loader", "postcss-loader"],
};


module.exports = {
entry: "./src/index.js",
output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    },
    devServer: { static: "./dist"},
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        })
    ],
    module: {
        rules:[babelLoader, cssLoader],
    },
}