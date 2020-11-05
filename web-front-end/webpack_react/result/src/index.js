import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';

// jsx = js in html tag(페이스북에서 만든 html 모방형 - html의 전부를 지원하지는 않음)

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.hydrate(<App />, document.getElementById('root'));