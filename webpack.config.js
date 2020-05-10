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
            fonts: path.resolve(__dirname, "src/assets/fonts/"),
            images: path.resolve(__dirname, "src/assets/images/")
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
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
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
