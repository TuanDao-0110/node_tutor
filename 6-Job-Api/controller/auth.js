// import status code library
const { StatusCodes } = require('http-status-codes')
const { Unauthentification, BadRequest } = require('../errors')
// import module schema

const User = require('../models/user')
// import jwt 
const jwt = require('jsonwebtoken')
// import bccrypt ==> hashing password: 
const bccrypt = require('bcryptjs')
const e = require('express')
require("dotenv").config()
// 1 this is where we send data from server

const register = async (req, res, next) => {
    // create new temp object ==> by using bccryptjs
    try {
        const user = await User.create({ ...req.body })

        // send data with token when register. 
        res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token: user.createJWT() })

    } catch (error) {
        // next(new Unauthentification('user exist'))
        next(error)
        // next()
    }
    // check is that our input model qualify our schema Model ('user')
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    // check the email exist or not ==> send default handler error
    if (!email || !password) {
        next(new BadRequest('please provide email/password'))
    }
    // find to check
    try {
        const user = await User.findOne({
            email
        })
        // compare password 
        const isPasswordCorrect = await user.comparePassword(password)
        if (!isPasswordCorrect) {
            return next(new Unauthentification("Wrong email/password"))
        }
        const token = user.createJWT()
        res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
    } catch (error) {
        next(new Unauthentification("Wrong email/password"))

    }
}
module.exports = { login, register }