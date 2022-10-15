// 1- Import module
const express = require('express')
const app = express()

// 2- constant host vs port
const host = 'localhost'
const port = '4000'

//3- router with people vs login import

const people = require('./routers/people')
const login = require('./routers/auth')
// static assest ==> make sure  that all the css vs js file is work together
app.use(express.static('./methods-public'))

// parse form data ==> use with only url post ==> with form have action : 'post'
app.use(express.urlencoded({ extended: false }))
// parse json use to get data ==> with body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(__dirname, './methods-public/index.html')
})
// user router
// 1. 
app.use('/login',login)
//1.Router with url api/people now we router to api/people 
app.use('/api/people', people)


app.get('*', (req, res) => {
    res.status(404).send('data not found˝')
})
app.listen(port, host, () => {
    console.log(host + port + '  ' + 'running ....')
})