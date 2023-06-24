const mongoose = require('mongoose')


const emloyeeModel = mongoose.model('employee', new mongoose.Schema({
    name : String,
    username : String,
    surname : String,
    email : String,
    password : String,
    age : Number,
    isAdmin : Boolean,
    category : String,
    confirmPassword : String

}))


module.exports = emloyeeModel