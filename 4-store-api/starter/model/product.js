const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],

    },
    price: {
        type: Number,
        required: [true, 'product price must be provided'],

    }, feature: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }, company: {
        type: String,
        enum: {
// 1. this is arrange of values can be picked ==> if the company name we insert !== this arr
// 2. new model data will not be sent
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})


module.exports = mongoose.model('product', productSchema)