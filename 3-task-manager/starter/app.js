// 1. import express module
const express = require('express')
// 2. create express()
const app = express()
// 3. path module for index file 
const path = require('path')
// 4. import connect function to MONGDB vs take our env file 
const connectDB = require('./db/connect') 
// --> this code will auto load .env file and initialize the values
require('dotenv').config()
const notFound =require('./middleware/not-found')
//5. router http request : api/v1/task
const tasks = require('./routes/tasks')
// 6. host vs port 
const host = 'localhost'
const port = 3000

// 7. create static for index file ==> help to connect with css/js file 
app.use(express.static('./public'))


//8. middleware to make sure when we get data by post method ==> we can have json file
app.use(express.json())


//9. routes: 

app.get('/edit-task', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/task.html'))
})
//10. router method with https request : '/api/v1/tasks'

app.use('/api/v1/tasks', tasks)
// 12. handle 404
app.use(notFound)
// 11. create async vs await function ==> try/catch mongoBD connection
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, host, () => {
            console.log('listening on port ' + host + port)
        })
    } catch (error) {
        console.log(error)
    }
}

// 12. start () server 
start()

