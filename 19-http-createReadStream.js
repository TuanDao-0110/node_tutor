const http = require('http')
const { createReadStream, } = require("fs")
http.createServer((request, result) => {
    // const text = readFileSync('./content/big.txt','utf-8',()=> { 

    // })
    // result.end(text)
    const textStream = createReadStream('./content/big.txt', 'utf-8')
    if (request.url == '/') {
        textStream.on('open', () => {
            // textStream.pipe() ==> is have to write data in chunk ==>  
            // now ==> response object can be set up in rewritable stream
            textStream.pipe(result)
        })
    }
    textStream.on('error', (er) => {
        console.log(er)
    })
}).listen(4000, () => {
    console.log('listen server 4000')
}) 