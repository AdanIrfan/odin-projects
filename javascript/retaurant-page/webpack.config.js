import HtmlWebpackPlugin from "html-webpack-plugin";

export default {

    mode: "development",

    devtool: "eval-source-map",

    entry: "./src/index.js",

    output: {

        filename: "main.js",

        clean: true

    },

    devServer: {

        static: "./dist",

        open: true,

    },

    module: {

        rules: [

            {

                test: /\.css$/i,

                use: ["style-loader", "css-loader"]

            },
            // webpack.config.js
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            // webpack.config.js
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            },



        ]

    },

    plugins: [

        new HtmlWebpackPlugin({

            template: "./src/template.html"

        })

    ]

};