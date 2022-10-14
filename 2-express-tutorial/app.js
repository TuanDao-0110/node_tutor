const express = require('express')

const app = express()
const { people } = require('./data')

const host = 'localhost'
const port = '4000'


// 1-get method
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// 2- POST method
app.post('/')

app.get('*', (req, res) => {
    res.status(404).send('data not found˝')
})
app.listen(port, host, () => {
    console.log(host + port + '  ' + 'running ....')
})