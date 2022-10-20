const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleWare = (err, req, res, next) => {
    // now we can confict the error by set up for it own object ==> that can handle all the status vs msg which sent from error
    let customError = {
        status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'something wrong try again later'
    }
    //handle when  

// handle when email already exist
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value enterer for ${Object.keys(err.keyValue)},please choose another value`
        customError.status = 400
    }
    return res.status(customError.status).json({ msg: customError.msg, })
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })

}

module.exports = errorHandlerMiddleWare