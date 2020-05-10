const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HTMLWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
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
                        loader: 'css-loader' 
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};
