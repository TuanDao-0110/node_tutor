const errorHandlerMiddleware =async (err, req, res, next) => {

    return res.status(500).json({ msg: 'Wrong server' })
}


module.exports = {errorHandlerMiddleware} 