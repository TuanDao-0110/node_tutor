// const express = require('express')
// const app = express()

// or we can write like this
const app = require('express')()


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
// app.status



//1.  so 'get' is known as request on createsever on http ==> 
// when browser request url ==> link that we can return some value
app.get('/', (req, res) => {
    // when user get address '/' ==> res will execute send ==> send something to browser
    res.status(200).send('Home page')

})

app.get('/about', (req, res) => {
    res.status(200).end('About page')
})
// 2. all method: ==> is equal to request.url which link can not define on createServer
app.all('*', (req, res) => {
    res.status(400).end('<h1>resource can not found</h1>')
})


//  CREATE LISTING SERVER
app.listen(4000, () => {
    console.log('listenning on port 4000')
})

