const CustomeAPIError = require('./custom-errors')
const { StatusCodes } = require('http-status-codes')

class UnAuth extends CustomeAPIError {
    constructor(message) {
        super(message)
        // this.statusCode = statusCode
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuth