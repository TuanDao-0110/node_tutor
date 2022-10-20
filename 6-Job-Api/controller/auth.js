// import status code library
const { StatusCodes } = require('http-status-codes')
const { Unauthentification, BadRequest } = require('../errors')
// import module schema

const User = require('../models/user')
// import jwt 
const jwt = require('jsonwebtoken')
// import bccrypt ==> hashing password: 
const bccrypt = require('bcryptjs')
require("dotenv").config()
// 1 this is where we send data from server

const register = async (req, res, next) => {
    // create new temp object ==> by using bccryptjs
    try {
        const user = await User.create({ ...req.body })
        const token = jwt.sign({
            name: user?.name, userId: user?._id
        }, 'fdosaif', { expiresIn: '40d' })
        // send data with token when register. 
        res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token })

    } catch (error) {
        // next(new Unauthentification('user exist'))
        next(error)
        // next()
    }
    // check is that our input model qualify our schema Model ('user')
}

const login = async (req, res) => {
    res.send('login user')
}
module.exports = { login, register }