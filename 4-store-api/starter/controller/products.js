const Product = require('../model/product')

const getAllProductStatic = async (req, res, next) => {
    const search = 'aa'
    const products = await Product.find({
        price: { $gt: 30 }
        // name: "2",
        // using regex
        // name: { $regex: 'a', $options: 'i' }
        // 1. ==> every data have name which include 'a' ==> will be token
        // 2. ==> 'i' ==> all the Case insensitivity to match upper and lower cases. For an example, see 
        // Perform Case- Insensitive Regular Expression Match.
        // there 
    }).select('name price')
        // .limit(5)
        .sort('price')
    // .skip(5)
    res.status(200).json({ products, nbHits: products.length })

    // if (!products) throw Error("access denied");

}

const getAllProduct = async (req, res) => {
    // console.log(req.query)
    // 1. get feature on query ==> to get value from database. 
    const { featured, company, name, sort, limit, field, page, numericFilters } = req.query
    const queryObject = {}
    // 2 check query  
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = { $regex: company, $options: 'i' }
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    let result = Product.find({})
    // with our params with 2 parameter --> we can string it to " "
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        console.log('this step')
        result = result.sort('createAt')
    }
    if (field) {
        const fieldsList = field.split(',').join(' ')
        console.log(fieldsList)
        result = result.select(fieldsList)
    }
    if (numericFilters) {
        const operatorMap = {
            '>': "$gt",
            '>=': "$gte",
            '=': "$eq",
            '<': "$lt",
            '<=': "$lte",
        }
        const regEx = /\b(<|>|>=|=|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        // 1. when we have filer string now we devide into 2 part array.
        const options = ['price', 'rating']

        filters = filters.split(',').forEach((item) => {
            // on the array ==> create new porperty to our queryObject that 
            //  the  porperty object will be : ===> example:
            //  price : { $gt : 40} or rating : { $gt : 22}
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                queryObject[field] = {
                    [operator]: Number(value),
                }
            }
        })
        if (queryObject[options[0]] && queryObject[options[1]]) {
            console.log('this step')
            result = Product.find({
                [options[0]]: queryObject[options[0]],
                [options[1]]: queryObject[options[1]] 
            })

        }
    }
    let tempPage = Number(page) || 1
    let temLimit = Number(limit) || 10
    const skip = (tempPage - 1) * temLimit
    result = result.skip(skip).limit(temLimit)
    const product = await result
    res.status(200).json({ nbHits: product.length, msg: product })
}

// 1 get each product
const getProduct = async (req, res, next) => {
    console.log(req.query)
    const product = await Product.find(req.query)
    res.status(200).json({ nbHits: product.length, msg: product })
}


module.exports = { getAllProduct, getAllProductStatic, getProduct }