const CustomAPIError = require("./custom-api");
const { StatusCodes } = require('http-status-codes')
class NotFoundError extends CustomAPIError {
    constructor(message) {
        this.message = message
        this.status = StatusCodes.BAD_REQUEST

    }
}

module.exports = NotFoundError