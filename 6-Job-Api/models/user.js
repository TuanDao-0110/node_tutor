const bccrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
// create user check Monoge

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'input your name'],
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'input your email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please provide valid email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'input your name'],
        minLength: 6,
        // maxLength: 12,
    },

})
// 1 is pr
userSchema.pre("save", async function (next) {
    const salt = await bccrypt.genSalt(10)
    this.password = await bccrypt.hash(this.password, salt)
    next()
})
// create instance method to execute token ==> this function will be invoke after mongose send data 

userSchema.methods.createJWT = function () {
    
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}
userSchema.methods.comparePassword = async function (candidatePassword) {
    console.log('candidate,' + candidatePassword + '  ' + 'store password : ' + this.password)
    const isMatch = await bccrypt.compare(candidatePassword, this.password)
    return isMatch
}
module.exports = mongoose.model('User', userSchema)