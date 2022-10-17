const mongoose = require('mongoose')

// 1. now we create our own shrema and its model.
// on Schrema ==> define our data type with key and its value's type. 
const taskSchema = new mongoose.Schema({
    // only this data's style will be send to data base
    // name: String, completed: Boolean

    // data validation
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 character']
    },
    completed: {
        type: Boolean,
        default: false,
    },

})
// 2. export chema model vs naming it  
// ===> this model is only with with databse 03-Task-MANAGER vs chema name: Task

module.exports = mongoose.model('Task', taskSchema)
// module.exports = mongoose.model('data', dataSchema)



