const express = require('express')

const app = express()
const { people } = require('./data')

const host = 'localhost'
const port = '4000'


// static assest


app.use(express.static('./methods-public'))

// parse form data ==> use with only url post ==> with form have action : 'post'

app.use(express.urlencoded({ extended: false }))
// parse json use to get data ==> with body

app.use(express.json())

// 1-get method
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})


app.get('/', (req, res) => {
    res.status(200).send(__dirname, './methods-public/index.html')
})

// 2- POST method
app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send('Welcome ' + name)
    }
    res.status(401).send("please provide name")
})


app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" })
    }
    res.status(201).json({ success: 'success', person: name })
})


// 3. PUT method


app.get('*', (req, res) => {
    res.status(404).send('data not found˝')
})
app.listen(port, host, () => {
    console.log(host + port + '  ' + 'running ....')
})