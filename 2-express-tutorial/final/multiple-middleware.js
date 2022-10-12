const express = require('express')
const app = express()

const logger = require('../logger')
const authorize = require('../authorize')

// req => middleware => res
// 1. if we only wanna apply for route /api/ 
// app.use('/about',logger)
// 2. apply for all route method. 
// app.use(logger)
// 3. set up with authorize  vs logger


app.use([authorize, logger])



app.get('/', (req, res) => {
    res.send('Home')
})

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