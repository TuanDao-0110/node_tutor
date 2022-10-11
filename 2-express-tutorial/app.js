const http = require('http')


// when create server callback function
const server = http.createServer((request, response) => {
    // write head ==> 
    response.writeHead(200,{
        'content' : 'text/html'
    })
    response.write('<h1>home page</h1>')
    response.end('')
})

server.listen(4000, () => {
    console.log('listenning to port 4000')
})