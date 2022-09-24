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

        // res.write('ok')

        res.end(`<h1>OPP your page can not find </h1>
    <p>we cant seem that we have page you looking for</p>
    <a href="/">back to home page</a>
    `)
    }

})

// 2. where the serve listen to 
server.listen(4000)


// 3. we can write in short : 


// const http = require('http')
// http.createServer(function (req, res) {
//     if (req.url == '/') {
//         res.write('.');
//         res.end();
//     }
//     else if (req.url == '/about') {
//         res.write('.')
//         res.end();
//     } else {
//         res.write('OPP');
//         res.end();
//     }
// }).listen(8000)