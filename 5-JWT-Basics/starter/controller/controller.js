// check username , password in post(login) request
// if exist create new JWT
// send back to front end
// set up authentication so only the request with JWT can access the
const CustomeAPIError = require('../errors/custom-errors')
const { use } = require('../routers/main')

const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req, res, next) => {
    // mongo to check user or password
    const { username, password } = req.body
    console.log(req.body)
    if (!username || !password) {
        // next(new CustomeAPIError('please  provide user name', 400))
        // throw new Error('wrong', 400)
        next(new CustomeAPIError('please  provide user name', 400))

    }
    else {
        // now we create token with payload, 
        const id = new Date().getDate()
        const token = jwt.sign({
            username, id
        }, process.env.JWT_SECRET, { expiresIn: '30d' })
        res.status(200).json({ msg: 'welcome come user ', token })
    }

}


const dashBoard = async (req, res) => {
    const luckyNum = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `hello user`, secret: `here your number: ${luckyNum}` })
}


module.exports = { login, dashBoard }