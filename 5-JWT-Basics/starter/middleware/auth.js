const jwt = require('jsonwebtoken')
// const CustomeAPIError = require('../errors/custom-errors')
const { UnAuthError } = require('../errors/index')
const authenticationMiddleWare = async (req, res, next) => {
    const { authorization } = req.headers
    // check token is exist
    if (!authorization || !authorization.startsWith('Bearer')) {
        return next(new UnAuthError('no token provided'))
    }
    // get the token
    const token = authorization.split(' ')[1]
    try {
        // now verify token vs get object definiation of that token ==> 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // get id vs user when we translate our token 
        const { username, id } = decoded
        // set up it to request 
        req.user = { id, username }
        next()
    } catch (error) {
        next(new UnAuthError('no token provided'))

    }
}


module.exports = authenticationMiddleWare