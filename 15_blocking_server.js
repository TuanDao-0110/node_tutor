const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    }
    else if (req.url === '/contact') {
        // blocking code 
        for (i = 0; i < 1000; i++) {
            for (j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('contact')
    } else {
        res.end('ERROR PAGE')
    }
})

server.listen(4000, () => {
    console.log('server is listening on port 4000')
})