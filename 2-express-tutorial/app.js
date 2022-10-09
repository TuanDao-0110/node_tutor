const http = require('http')


// when create server callback function
const server = http.createServer((request, response) => {
    response.end('welcome to our home page')
})

server.listen(4000, () => {
    console.log('listenning to port 4000')
})