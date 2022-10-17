const product = require('../model/product')



const getAllProductStatic = async (req, res) => {
throw new Error('testing async errors')
    res.status(200).json({ msg: 'product testing static' })
}




const getAllProduct = async (req, res) => {
    
    res.status(200).json({ msg: 'product testing' })
}


module.exports = { getAllProduct, getAllProductStatic }