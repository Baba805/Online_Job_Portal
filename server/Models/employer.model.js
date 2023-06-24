const mongoose = require('mongoose')



const employerModel = mongoose.model('employer', new mongoose.Schema({
    companyName : String,
    email : String,
    password : String,
    isAdmin : String
}))



module.exports = employerModel