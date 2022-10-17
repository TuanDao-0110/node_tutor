// 1 this function will work with database anh return then if success or catch if fail.
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
        //    1 . this gonne go to next middleware ==> that will handle the error
        // 2. so in this case we will set up middleware ==> that will handle all the error
        // 3. the most popular is The default error handler on express.js
            next(error) 
        }
    }
}

module.exports = asyncWrapper