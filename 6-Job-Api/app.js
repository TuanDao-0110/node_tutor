const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')
// import router 
const authRouter = require('./routers/auth')
const jobRouter = require('./routers/job')

// errr handler 

const notFoundMiddleware = require('./middleware/root-found')
const errorHandlerMiddleware = require('./middleware/errorhandler')
const authentication = require('./middleware/authentification')
app.use(express.json())

// connectDB 
const connectDB = require('./db/connect')
// extra package

// routers

app.use('/api/v1/auth', authRouter)
// we use middleware before  we execute jobRouter ==> to make sure it good 
app.use('/api/v1/jobs', authentication, jobRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000
const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`listening to the port ${PORT}......`)
        })
    } catch (error) {

    }
}


start()