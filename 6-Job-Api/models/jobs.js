const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'please provide company'],
        maxLength: 50
    }, position: {
        type: String,
        required: [true, 'please provide position'],
        maxLength: 100,

    }, status: {
        type: String,
        // enum only allow with those value
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    }, createBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please Provide User']
    }

}, { timestamps: true })


module.exports = mongoose.model('Job', JobSchema)