const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { Unauthentification, } = require('../errors')

const auth = async (req, res, next) => {
    // check header 
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        next(new Unauthentification('authentication invalid'))
    }
    const token = authHeader.split(' ')[1]
    try {
        const payLoad = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the routes
        req.user = {
            userId: payLoad.userId, name: payLoad.name
        }
        next()
    } catch (error) {
        next(new Unauthentification('authentication invalid'))
    }
}

module.exports = auth