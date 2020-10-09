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
$ cd ..
```

```javascript
// web-front-end/src/index.js
const rootEl = document.getElementById('root');

const content = document.createElement('p')
content.innerText = "Hello World!"
content.className = "error-text"

rootEl.appendChild(content)

console.log("you're so great!");
```

### Set babel & webpack config file

```
// web-front-end/  
$ touch webpack.config.js  
$ yarn add -D webpack webpack-cli babel-loader @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-class-properties 
```

```javascript
// web-front-end/webpack.config.js  
const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',  
  output: {  
    filename: "[name].js",  
    path: path.resolve(__dirname, 'dist'),  
  },  
  module: {  
    rules: [  
      {  
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
      }  
    ]  
  },  
  devtool: 'source-map',  
};  
```

```
// web-front-end/  
$ npx webpack --mode development --entry ./src/index.js --output dist/main.js  
Hash: 05c5ce768ee6073b5403
Version: webpack 4.44.2
Time: 38ms
Built at: 10/09/2020 11:26:43 PM
      Asset      Size  Chunks                   Chunk Names
    main.js  3.78 KiB    null  [emitted]        null
main.js.map   3.6 KiB    null  [emitted] [dev]  null
Entrypoint null = main.js main.js.map
[./src/index.js] 28 bytes {null} [built]
```

### Set script to package.json

```json
// web-front-end/package.json  
...(생략)...  
  "scripts": {  
    "build": "webpack"  
  },  
...(생략)...  
```

```bash
$ yarn build  
```

### Set HTML and check code

```bash
// web-front-end/
$ mkdir public; cd public
$ touch index.html
$ cd ..
```

```html
<!-- web-front-end/public/index.html -->  
<!DOCTYPE html>  
<html>  
  <head>  
    <title>Learn Web</title>  
  </head>  
  <body>  
    <div id='root'>
    <script src="../dist/main.js"></script>
  </body>  
</html>  
```

1. run html(click web-front-end/public/index.html) in **browser**!  
2. view **"Hello world!"** content!  
3. check console tab in **browser's developer tool**!  

### Set CSS 

```bash
// web-front-end/
$ cd src
$ touch index.css
$ yarn add -D css-loader style-loader  
```

```css
/* web-front-end/src/index.css */

.error-text {
    color: red;
}
```

```javascript
/* web-front-end/src/index.js */

import './index.css'

...(생략)...  

```

```javascript
// web-front-end/webpack.config.js  

module.exports = {  
...(생략)...  
  module: {  
    rules: [{
      ...(생략)...  
      },  
      // loader는 배열로 설정할 시 뒤부터 동작  
      {  
        test: /\.css$/,  
        use: ["style-loader", "css-loader"],  
      },  
    ]  
  },  
...(생략)...  
};  
```

### HtmlWebpackPlugin & CleanWebpackPlugin


```bash
$ yarn add -D html-webpack-plugin clean-webpack-plugin  
```

```html
<!-- web-front-end/public/index.html -->  
<!DOCTYPE html>  
<html>  
  <head>  
    <title>Learn Web</title>  
  </head>  
  <body>  
    <div id='root'>
    <!-- delete script tag -->
    <!-- <script src="../dist/main.js"></script> -->
  </body>  
</html>  
```

```javascript
// web-front-end/webpack.config.js  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const { CleanWebpackPlugin } = require("clean-webpack-plugin");  

module.exports {  
  ...(생략)...  
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
  ]  
  ...(생략)...  
}  
```

1. run new html(click web-front-end/dist/index.html) in **browser**!  
2. view **"Hello world!"** content!  
3. check console tab in **browser's developer tool**!  

### Set HMR(Hot Module Reloading)

```bash
$ yarn add -D webpack-dev-server  
```

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

1. go to development page(http://127.0.0.1:3000/) in **browser**!  
2. view **"Hello world!"** content!  
3. check console tab in **browser's developer tool**!  
4. check when modify your src files, **reload** development page!  

> 진행이 완료된 결과는 result 디렉터리에서 확인하실 수 있습니다!

```bash
// web-front-end/  
$ cd result
$ yarn start
```

### webpack?

webpack은 모듈 번들러의 일종입니다.

모듈 번들러에서 모듈이란 일반적으로 '파일'이라고 생각할 수 있습니다. 자바스크립트로 작성된 파일 혹은 CSS, HTML, 이미지 등의 파일이 모듈이 될 수 있습니다.

따라서 모듈 번들러는 모듈 번들(추합)을 위해 사용됩니다.

그러므로 webpack은 모듈을 모아 하나의 디렉터리(폴더) 안에 묶어주는 역할을 하여 웹 환경에 맞는 파일 구조를 제공합니다.
