const mongoose = require('mongoose')



const employerModel = mongoose.model('employer', new mongoose.Schema({
    companyName : String,
    email : String,
    password : String,
    isAdmin : String,
    confirmPassword : String
}))



module.exports = employerModel