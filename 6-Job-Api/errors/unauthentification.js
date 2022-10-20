const CustomAPIError = require("./custom-api");
const { StatusCodes } = require('http-status-codes')
class Unauthentification extends CustomAPIError {
    constructor(message) {
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthentification