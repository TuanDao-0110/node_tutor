const express = require('express')
const router = express.Router()
const { getAllProduct, getAllProductStatic, getProduct } = require('../controller/products')

router.route('/').get(getAllProduct).get(getProduct)
router.route('/static').get(getAllProductStatic)

module.exports = router