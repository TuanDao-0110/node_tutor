const { CustomAPI } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err instanceof CustomAPI) {
        return res.status(err.status).json({ msg: err.message })
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleWare