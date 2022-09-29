const http = require('http')
// 1. use http module to and create a server.
const server = http.createServer((req, res) => {
    // req = request
    // res =result
    if (req.url === '/') {
        // res.write('c')
        res.end('welcome to home page')
    }
    else if (req.url === '/about') {
        // res.write('check')
        res.end('here is about')
    }
    else {
        res.end(`<h1>OPP your page can not find </h1>
    <p>we cant seem that we have page you looking for</p>
    <a href="/">back to home page</a>
    `)
    }

})

// 2. where the serve listen to 
server.listen(4000)

