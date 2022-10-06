const http = require('http')
const { createReadStream } = require("fs")

const server = http.createServer((request, result) => {
    if (request.url === '/') {
        // result.end('not')
       const readSream = createReadStream('./content/big.txt', 'utf-8')
        readSream.on('open', (res) => {
            console.log('send data')
          readSream.pipe(result) 
        })

    }
}).listen(4000, () => {
    console.log('listen to server ')
})