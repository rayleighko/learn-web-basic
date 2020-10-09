# 웹 프론트엔드

- Javascript(ES6)
- node.js
- webpack(for bundling)
- webpack-dev-server(for hot module reloading)
- babel(for transpiling)

## 1  

### Install package manager

```bash
// learn-web-basic  
$ npm i -g yarn  
$ cd web-front-end  
```

### Project initialize  

```bash
// web-front-end/  
$ yarn init -y  
$ mkdir src; cd src
$ touch index.js  
```

```javascript
// web-front-end/index.js

console.log('hello world!');
```

### Set babel & webpack config file

```
// web-front-end/  
$ touch webpack.config.js  
$ yarn add -D webpack webpack-cli babel-loader @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-class-properties  
```

```javascript
// web-front-end/webpack.config.js  

module.exports = {
  mode: 'development',  
  entry: './src/index.js',  
  output: {  
    filename: "[name].js",  
    path: path.resolve(__dirname, 'dist/js'),  
  },  
  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        include: [  
          path.resolve(__dirname, 'src/js')  
        ],  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env'],  
            plugins: ['@babel/plugin-proposal-class-properties']  
          }  
        }  
      }  
    ]  
  },  
  devtool: 'source-map',  
};  
```

```
// web-front-end/  
$ npx webpack --mode development --entry ./src/index.js --output dist/main.js  
```

### Set script to package.json

```json
// web-front-end/package.json  
...(생략)...  
  "scripts": {  
    "build": "webpack -w"  
  },  
...(생략)...  
```

```bash
$ npm build  
```

### Set CSS 

```bash
$ yarn add -D css-loader style-loader  
```

```javascript
// web-front-end/webpack.config.js  

module.exports = {  
...(생략)...  
  module: {  
    rules: [  
      ...(생략)...  
      },  
      // loader는 배열로 설정할 시 뒤부터 동작  
      {  
        test: /\.css$/,  
        use: ["css-loader","style-loader"],  
      },  
    ]  
  },  
...(생략)...  
};  
```

### HtmlWebpackPlugin & CleanWebpackPlugin


```bash
$ yarn add -D html-webpack-plugin clean-webpack-plugin  
$ mkdir public; cd public
$ touch index.html
```


```javascript
// web-front-end/webpack.config.js  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const { CleanWebpackPlugin } = require("clean-webpack-plugin");  

module.exports {  
  plugins: [  
    new CleanWebpackPlugin(),  
    new HtmlWebpackPlugin({  
      template: './src/index.html', // 템플릿 경로를 지정  
      templateParameters: { // 템플릿에 주입할 파라매터 변수 지정  
        env: process.env.NODE_ENV === 'development' ? '(개발 버전)' : '',  
      },  
      hash: true, // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다  
      minify: process.env.NODE_ENV === 'production' ? {  
        collapseWhitespace: true, // 빈칸 제거  
        removeComments: true, // 주석 제거  
      } : false,  
    })  
  ]  
}  
```

```html
<!-- web-front-end/public/index.html -->  
<!DOCTYPE html>  
<html>  
  <head>  
    <title>타이틀<%= env %></title>  
  </head>  
  <body>  
  </body>  
</html>  
```

### Set HMR(Hot Module Reloading)

```javascript
// web-front-end/webpack.config.js  
module.exports = {  
...(생략)...  
  devServer: {  
    contentBase: path.join(__dirname, "dist"),  
    publicPath: "/",  
    host: "127.0.0.1",  
    overlay: true,  
    port: 3000,  
    stats: "errors-only",  
    historyApiFallback: true,  
  },  
...(생략)...  
}
```

```json
// web-front-end/package.json  
...(생략)...  
  "scripts": {  
    "build": "webpack -w",  
    "start": "webpack-dev-server --progress"  
  },  
...(생략)...  
```

```bash
// web-front-end/  
$ yarn start  
```