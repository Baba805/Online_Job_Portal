const mongoose = require('mongoose')


const contactUstModel = mongoose.model('contactus', new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    Introduction : String
}))


module.exports = contactUstModel