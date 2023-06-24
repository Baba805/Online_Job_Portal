const mongoose = require('mongoose')



const servicesModel = mongoose.model('services', new mongoose.Schema({
    name : String,
    imageUrl : String,
    title : String
}))


module.exports = servicesModel