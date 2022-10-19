const CustomAPIError = require("./custom-api");
const { StatusCodes } = require('http-status-codes')
class Unauthentification extends CustomAPIError {
    constructor(message) {
        this.message = message
        this.status = StatusCodes.UNAUTHORIZED

    }
}

module.exports = Unauthentification