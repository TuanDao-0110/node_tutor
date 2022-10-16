const mongoose = require('mongoose')

// 1. now we create our own shrema and its model.
// on Schrema ==> define our data type with key and its value's type. 
const taskSchema = new mongoose.Schema({
    name: String, completed: Boolean
})
// 2. export chrema model vs naming it  

module.exports = mongoose.model('Task', taskSchema)
// module.exports = mongoose.model('data', dataSchema)



