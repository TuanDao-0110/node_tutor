const http = require('http')


// when create server callback function
const server = http.createServer((request, response) => {
    console.log('user hit server')

})

server.listen(4000, () => {
    console.log('listenning to port 4000')
})