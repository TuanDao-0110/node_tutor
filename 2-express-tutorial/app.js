const http = require('http')


// when create server callback function
const server = http.createServer((request, response) => {
    // 1.check method type 
    // console.log(request.method)
    // 2.check url link: 
    // console.log(request.url)

    // 3.now we can manipulate with url
    const url = request.url
    // 3.1 home page request 
    if (url === '/') {
        response.writeHead(200, {
            'content': 'text/html'
        })
        response.write('<h1>home page</h1>')
        response.end('end')
    }
    // 3.2 about page
    else if (url === '/about') {
        response.writeHead(200, {
            'content': 'text/html'
        })
        response.write('<h1>about page</h1>')
        response.end('')
    }
    // 3.3 error
    else {
        response.writeHead(404, {
            'content': 'text/html'
        })
        response.write('<h1>error </h1>')
        response.end('')
    }
})

server.listen(4000, () => {
    console.log('listenning to port 4000')
})