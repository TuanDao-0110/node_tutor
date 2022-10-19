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

const PORT = process.env.PORT || 3000
const start = async () => {

    try {
        app.listen(PORT, () => {
            console.log(`listening to the port ${PORT}......`)
        })
    } catch (error) {

    }
}


start()