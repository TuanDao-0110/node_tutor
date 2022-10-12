const { response } = require('express')
const express = require('express')
const app = express()
const { people, products } = require('./data')
app.get('/', (request, response) => {
    // response.status(200).send()
    // response.status(200).json(people)
    response.status(200).send("<h1>home page</h1><a href='/api/products'>product</a>")
})
// set up query
app.get('/api/products', (req, res) => {
    const newProduct = products?.map((item, index) => {
        const { id, name, image } = item;
        return { id, name, image }
    })
    res.status(200).json(newProduct)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    console.log(req.params)
    // const singleProduct = products.find(item => item.id === 1)
    // res.status(200).json(singleProduct)
    const singleProduct = products.find(item => item.id === Number(req.params.productID))
    // return  with if else condition.
    singleProduct ?
        res.status(200).json(singleProduct) : res.status(404).json('Product not found')
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.end('review')
})


// set up query return
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query

    let sortedProduct = [...products]
    if (search) {
        sortedProduct = sortedProduct.filter(item => item.name.includes(search))
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    (sortedProduct.length < 1) ?
        // 1st option
        // res.status(200).send('no product matches')
        // 2nd option
        res.status(200).json({
            sucess: true, data: []
        }) : res.status(200).json(sortedProduct)

})

app.all('*', (req, res) => {
    res.status(404).end('<h1>Resource not found</h1>')
})
app.listen(4000, () => {
    console.log('server is listening on port 4000....')
})