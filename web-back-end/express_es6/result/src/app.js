import express from 'express'

let user = {
    name: 'kim',
    age: '13',
}

const app = express()

// http method = get, '/': 라우팅 정보에 요청이 들어오면 콜백 함수를 실행한다.
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.get('/user', (req, res) => {
    res.send(user.name)
})

app.put('/user', function (req, res) {
    user = {
        name: 'lee',
        age: '14'
    }
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

// api 문서, api 요청 도구(insomnia, postman)

export default app