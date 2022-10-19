const express = require('express')
const router = express.Router()


const { login, dashBoard } = require('../controller/controller')
// 1 Import authen 
const authenticationMiddleWare = require('../middleware/auth')

// middleware function can be put 1st ==> when it satified condition ==> it go to dasboard
router.route('/dashboard').get(authenticationMiddleWare, dashBoard)
router.route('/login').post(login)

module.exports = router