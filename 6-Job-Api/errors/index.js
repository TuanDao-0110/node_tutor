const BadRequest = require('./bad-request')
const CustomAPI = require('./custom-api')
const NotFoundError = require('./root-found')
const Unauthentification = require('./unauthentification')


module.exports = {
    BadRequest, CustomAPI, NotFoundError, Unauthentification
}