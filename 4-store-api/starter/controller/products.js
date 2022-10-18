const Product = require('../model/product')

const getAllProductStatic = async (req, res, next) => {

    const products = await Product.find({
        featured: 'not'
    })
    res.status(200).json({ products })
  
    // if (!products) throw Error("access denied");

}

const getAllProduct = async (req, res) => {

    res.status(200).json({ msg: 'product testing' })
}


module.exports = { getAllProduct, getAllProductStatic }