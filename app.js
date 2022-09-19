const http = require('http')
// 1. use http module to and create a server.
const server = http.createServer((req,res)=> { 
    // req = request
    // res =result
res.write('welcome to our home page',)
res.end()

})

// 2. where the serve listen to 
server.listen(5000)


