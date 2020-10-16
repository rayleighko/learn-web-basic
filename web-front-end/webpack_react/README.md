# 1. Webpack With ES6

- Javascript(ES6)
- node.js
- webpack(for bundling) 
- webpack-dev-server(for hot module reloading) 
- babel(for transpiling)
- react

## Package Dependencies

```json
// Package Dependencies
  "@babel/cli": "^7.11.6",
  "@babel/core": "^7.11.6",
  "@babel/plugin-proposal-class-properties": "^7.10.4",
  "@babel/preset-env": "^7.11.5",
  "babel-loader": "^8.1.0",
  "clean-webpack-plugin": "^3.0.0",
  "css-loader": "^4.3.0",
  "html-webpack-plugin": "^4.5.0",
  "style-loader": "^2.0.0",
  "webpack": "^4.44.2",
  "webpack-cli": "^3.3.12",
  "webpack-dev-server": "^3.11.0"
```

## Set babel & webpack config file for React

```
// web-front-end/  
$ yarn add -D @babel/preset-react
```

```javascript
// web-front-end/webpack.config.js  
const path = require('path');

module.exports = {
...(생략)...   
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
...(생략)...  
};  
```

## Initialize React App 

```
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