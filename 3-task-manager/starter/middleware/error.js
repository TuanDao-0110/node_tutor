const { CustomAPIError } = require('../errors/custom-error')


const errorHandlerMiddleware = (err, req, res, next) => {
    // 1. check that car belong to this CustomAPIERROR class ?
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'wrong' })
}

module.exports = { errorHandlerMiddleware }