import './index.css'

const rootEl = document.getElementById('root');

const content = document.createElement('p')
content.innerText = "Hellow World!"
content.className = "error-text"

rootEl.appendChild(content)

console.log("you're so great!");