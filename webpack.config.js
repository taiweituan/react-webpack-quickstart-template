const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: {
        main: [
            "./src/index.js", 
            "./src/style/main.scss"
        ]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "bundle.css",
                },
            },
            {loader: "extract-loader"}, {
                loader: "css-loader", 
                options: {
                    sourceMap: true
                }
            }, {
                loader: "postcss-loader",
                options: {
                    plugins: () => [autoprefixer()],
                },
            },{
                loader: "sass-loader",
                options: {
                    includePaths: ["./node_modules"],
                    sourceMap: true
                },
            }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};