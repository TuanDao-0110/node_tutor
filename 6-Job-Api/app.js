const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')
// import router 
const authRouter = require('./routers/auth')
const jobRouter = require('./routers/job')
// helmet security pakage
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimitter = require('express-rate-limit')
// errr handler 

const notFoundMiddleware = require('./middleware/root-found')
const errorHandlerMiddleware = require('./middleware/errorhandler')
const authentication = require('./middleware/authentification')
app.use(express.json())
// invoke our security pakage
// set up long and how many request 
app.set('trust proxy',1)
app.use(rateLimitter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers

}))
app.use(helmet())
app.use(cors())
app.use(xss())

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