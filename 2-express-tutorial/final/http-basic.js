const http = require('http')
const { readFileSync } = require('fs')
// get all files
const homePage = readFileSync('../navbar-app/index.html')
const homeStyles = readFileSync('../navbar-app/styles.css')
const homeImage = readFileSync('../navbar-app/logo.svg', (result) => {
    console.log(result)
})
const homeLogic = readFileSync('../navbar-app/browser-app.js')


// when create server callback function
const server = http.createServer((request, response) => {
    // 1.check method type 
    // console.log(request.method)
    // 2.check url link: 
    // console.log(request.url)

    // 3.now we can manipulate with url
    const url = request.url
    console.log(url)
    // 3.1 home page request 
    // index.html
    if (url === '/') {
        response.writeHead(200, {
            'content-type': 'text/html' 
        })
        // response.write('<h1>home page</h1>')
        response.write(homePage)
        response.end('')
    }
    // styles.css
    else if (url === '/styles.css') {
        response.writeHead(200, {
            'content-type': 'text/css'
        })
        // response.write('<h1>home page</h1>')
        response.write(homeStyles)
        response.end('')
    }
    // logo
    else if (url === '/logo.svg') {
        response.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        // response.write('<h1>home page</h1>')
        response.write(homeImage)
        response.end('')
    }
    // logic
    else if (url === '/browser-app.js') {
        response.writeHead(200, {
            'content-type': 'text/javascript'
        })
        // response.write('<h1>home page</h1>')
        response.write(homeLogic)
        response.end('')
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