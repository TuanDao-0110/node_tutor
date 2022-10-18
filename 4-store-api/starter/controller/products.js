const Product = require('../model/product')

const getAllProductStatic = async (req, res, next) => {
    try {
        const products = await Product.find({
            featured: 'not'
        })

        res.status(200).json({ products })
    } catch (error) {
        // console.log('this default error : ' + error)
        const newErr = new Error()
        newErr.status = 500
        newErr.message = 'wrong server'
        next(newErr)
    }


    // throw new Error('testing async errors')

    // if (!products) throw Error("access denied");

}

const getAllProduct = async (req, res) => {

    res.status(200).json({ msg: 'product testing' })
}


module.exports = { getAllProduct, getAllProductStatic }