# 웹 백엔드

- Javascript(ES6)  
- node.js  
- babel(for transpiling)  
- nodemon(for automatically restarting)  

## 0

### 사전 준비물  

- nvm or node.js(npm)  
- shell(bash, zsh, ...)  

## 1

### Install package manager

```bash
$ npm i -g yarn  
$ cd web-back-end  
```

### Project initialize  

```bash
// web-back-end/  
$ yarn init -y  
$ touch index.js  
```

```javascript
// web-back-end/index.js

import path from "path"  
const outputPath = path.resolve(__dirname, "dist")  
console.log(`Output path is "${outputPath}".`)  
export { outputPath }  
```

### Set Babel Config file  

```bash  
// web-back-end/  
$ touch .babelrc  
$ yarn add -D @babel/core @babel/cli @babel/preset-env @babel/node  
```

```json
{  
  "presets": ["@babel/env"],  
}  
```

```bash
// web-back-end/  
$ npx babel-node index.js  
```

### Set script to package.json

```json
// package.json
...(생략)...  
  "scripts": {
    "start": "babel-node index.js"  
  },
...(생략)...  
```

```bash
$ yarn start
```

> 진행이 완료된 결과는 result 디렉터리에서 확인하실 수 있습니다!

```bash
// web-front-end/  
$ cd result
$ yarn start
```

### babel?

babel은 transpiler의 일종이고, transpiler는 compiler의 일종이다. 

컴파일러는 C언어 -(컴파일러)> 어셈블리 -(어셈블러)> 기계어

트렌스파일러 ES6의 자바스크립트 -(트랜스파일러)> ES5의 자바스크립트

Node는 ES6의 문법을 이해하지 못하기 때문에 ES6와 node를 사용한 개발 환경에서는 Babel과 같은 트랜스파일러가 필요하다.