const CustomeAPIError = require('./custom-errors')
const {StatusCodes} = require('http-status-codes')
class BadRequest extends CustomeAPIError {
    constructor(message) {
        super(message)
        // this.statusCode = statusCode
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest