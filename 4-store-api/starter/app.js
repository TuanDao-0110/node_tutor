// 1. work with dotenv
require('dotenv').config()
// async errors

const express = require("express")
const app = express()

// 


const {notFoundMiddleware} =require('./middleware/not-found')
const {errorHandlerMiddleware} =require('./middleware/error-handler')
// middleware
app.use(express.json())







