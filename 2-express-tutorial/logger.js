const logger = (req, res, next) => {
    const { method, url } = req
    const time = new Date().getTime()
    console.log('middleaware')
    console.log(method, url, time)
    next()
}


module.exports = logger