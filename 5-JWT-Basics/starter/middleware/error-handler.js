const customAPIErr = require('../errors/custom-errors')


const errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof customAPIErr) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Wrong Server' })
}


module.exports = errorHandlerMiddleware