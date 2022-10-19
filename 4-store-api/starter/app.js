// 1. work with dotenv
require('dotenv').config()
// async errors
require('express-async-errors')
const express = require("express")
const app = express()

// 


const notFoundMiddleware = require('./middleware/not-found')
const {errorHandlerMiddleware} = require('./middleware/error-handler')
// middleware
app.use(express.json())

// import mongoose 
const connectBD = require('./db/connect')

// get router 


const productRouter = require('./router/router')
// root
app.use(express.static('./'))
app.get('/', (req, res) => {
    // res.send("<h1>Store API </h1> <a href='/api/v1/products'>product route</a>")
})
// setup router 

app.use('/api/v1/products',productRouter)

// products route when get error
// 1 handle  after router when can not get infor from server
app.use(errorHandlerMiddleware)
// 2 handle before the router 
app.use(notFoundMiddleware)

// create port 


const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        // connect DB
        await connectBD(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log('listening ' + PORT + '....')
        })
    } catch (error) {
        next(error)
    }
}

start()


