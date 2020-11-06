# 2. Webpack With React

- Javascript(ES6)
- node.js
- webpack(for bundling) 
- webpack-dev-server(for hot module reloading) 
- babel(for transpiling)
- react

## Package Dependencies

```json
// Package Dependencies
    "devDependencies": {
        "@babel/cli": "^7.11.6",
        "@babel/core": "^7.11.6",
        "@babel/plugin-proposal-class-properties": "^7.10.4",
        "@babel/preset-env": "^7.11.5",
        "@babel/preset-react": "^7.12.1",
        "babel-loader": "^8.1.0",
        "clean-webpack-plugin": "^3.0.0",
        "css-loader": "^4.3.0",
        "html-webpack-plugin": "^4.5.0",
        "style-loader": "^2.0.0",
        "webpack": "^4.44.2",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
    },
    "dependencies": {
        "react": "^16.14.0",
        "react-dom": "^16.14.0"
    }
```

## Set babel & webpack config file for React

```
// web-front-end/  
$ yarn add -D @babel/preset-react
```

```javascript
// web-front-end/webpack.config.js  const path = require('path');
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
                    presets: ['@babel/preset-env', "@babel/preset-react"],
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
```

## Initialize React App 

```bash
// web-front-end/  
$ yarn add react react-dom
```

## Modify Existing src/index file

```javascript
// web-front-end/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## Add New App file

```javascript
// web-front-end/src/App.js

import React from 'react';

const App = () => (
    <div className="error-text">
        Hello, world!!
    </div>
);

export default App;
```

```bash
// web-front-end/
$ yarn start
```

1. run start!  
2. view **"Hello, world!"** content!  

## Modify Existing src/index file