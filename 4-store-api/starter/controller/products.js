const Product = require('../model/product')

const getAllProductStatic = async (req, res, next) => {

    const products = await Product.find({
        // name: "2",
    })
    res.status(200).json({ products, nbHits: products.length })

    // if (!products) throw Error("access denied");

}

const getAllProduct = async (req, res) => {
    // console.log(req.query)
    // 1. get feature on query ==> to get value from database. 
    const { featured, company, name } = req.query

    const queryObject = {}
    // 2 check query 
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = name
    }
    console.log(queryObject)
    const product = await Product.find(queryObject)
    res.status(200).json({ msg: product, nbHits: product.length })
}

// 1 get each product
const getProduct = async (req, res, next) => {
    console.log(req.query)
    const product = await Product.find(req.query)
    res.status(200).json({ msg: product })
}


module.exports = { getAllProduct, getAllProductStatic, getProduct }