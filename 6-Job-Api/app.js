const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')

// errr handler 

const notFoundMiddleware = require('./middleware/root-found')
const errorHandlerMiddleware = require('./middleware/errorhandler')

app.use(express.json())


// extra package

// routers

app.get('/', (req, res) => {
    res.send('job api')
})


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    
    try {
        app.listen(process.env.PORT, () => {
            console.log(`listening to the port ${process.env.PORT}......`)
        })
    } catch (error) {

    }
}


start()