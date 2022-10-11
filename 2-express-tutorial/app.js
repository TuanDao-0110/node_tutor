const express = require('express')
const path = require('path')

const app = express()

// use to fix path problem with some extenal static file will now public to file public
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})


app.all('*', (req, res) => {
    res.status(400).send('resource not found')
})

app.listen(4000, () => {
    console.log('listening port on 4000')
})