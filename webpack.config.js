const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HTMLWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            app: path.resolve(__dirname, "./src")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s*)css?/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {   
                        loader: "css-loader" 
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    plugins: [htmlPlugin]
};
