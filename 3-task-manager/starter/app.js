const express = require('express')
const app = express()
const path = require('path')


const tasks = require('./routes/tasks')

const host = 'localhost'
const port = 3000
app.use(express.static('./public'))


// middleware to make sure when we get data by post method ==> we can have json file
app.use(express.json())
// routes: 

app.get('/hello', (req, res) => {
    // res.status(200).send('hello')
res.status(200).sendFile(path.resolve(__dirname,'./public/task.html'))
})

// router method with https request : '/api/v1/tasks'

app.use('/api/v1/tasks', tasks)


app.listen(port, host, () => {
    console.log('listening on port ' + host + port)
})

