const {createServer} = require('http')

createServer((request,result)=> { 
    console.log('request event')
    result.write('url: ' + request.url)
    result.end('hello world')


}).listen(5000,()=> { 
    console.log('server on listening  on port : 5000.... ')
})

