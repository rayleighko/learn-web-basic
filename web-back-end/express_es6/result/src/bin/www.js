import app from "../app"

const hostname = "127.0.0.1"
const port = 3000

// computing port, hostname: localhost(127.0.0.1)
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})