const http = require('http')
const server = http.createServer()
server.on('request', (request, result) => {
    result.end('WELCOME')
})
server.listen(5000, () => {
    console.log('call to server')
})


// the server i create have ability to listen to my request event 
