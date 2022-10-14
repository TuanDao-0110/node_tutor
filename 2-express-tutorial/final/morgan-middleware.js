const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')



// 3. set up with authorize  vs logger

// app.use([morgan('tiny'),authorize,logger])

// app.use('/about',morgan('tiny'))
app.use([express.static('./public'), morgan('tiny')])

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

// app.get('/',(req,res)=> { 
//     res.send('Home')
// })

app.get('/about', (req, res) => {

    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Product')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('items')
})
app.get('*', (req, res) => {
    console.log(req.user)
    res.status(404).send('data not found')
})
app.listen(4000, () => {
    console.log("listening on port 4000 ....")
})