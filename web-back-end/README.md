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
$ npm start
```
