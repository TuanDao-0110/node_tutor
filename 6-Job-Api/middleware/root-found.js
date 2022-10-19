const {StatusCodes} =require('http-status-codes')

const errorNotFound = (req,res)=> { 
    res.status(StatusCodes.NOT_FOUND).json({msg:'router not found'})
}

module.exports = errorNotFound