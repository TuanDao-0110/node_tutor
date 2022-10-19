const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()

app.use(express.static('./public'))
const PORT = process.env.PORT || 3000
// setup router 


const router = require('./routers/main')
app.use('/api/v1', router)
// check middleware wrong router
const errHandler = require('./middleware/root-found')
app.use(errHandler)
// check middleware default handler
const defautHandler = require('./middleware/error-handler')
app.use(defautHandler)

// set up port listener
const starter = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`listening to port : ${PORT} ......`)
        })
    } catch (error) {
        console.log(error)
    }
}

starter()




