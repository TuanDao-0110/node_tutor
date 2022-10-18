const Product = require('../model/product')



const getAllProductStatic = async (req, res) => {

    const products = await Product.find()

    // throw new Error('testing async errors')
    res.status(200).json({ products })
}




const getAllProduct = async (req, res) => {

    res.status(200).json({ msg: 'product testing' })
}


module.exports = { getAllProduct, getAllProductStatic }