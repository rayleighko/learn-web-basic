const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 템플릿 경로를 지정  
            templateParameters: { // 템플릿에 주입할 파라매터 변수 지정  
                env: process.env.NODE_ENV === 'development' ? '(개발 버전)' : '',
            },
            hash: true, // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다  
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true, // 빈칸 제거  
                removeComments: true, // 주석 제거  
            } : false,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        host: "127.0.0.1",
        overlay: true,
        port: 3000,
        stats: "errors-only",
        historyApiFallback: true,
    },
    devtool: 'source-map',
};