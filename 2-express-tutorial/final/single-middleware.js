const express = require('express')
const app = express()

const logger = require('../logger')

// req => middleware => res
// 1. if we only wanna apply for route /api/ 
app.use('/about', logger)
// 2. apply for all route method. 
// app.use(logger)

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
    res.send('items')
})
app.listen(4000, () => {
    console.log("listening on port 4000 ....")
})