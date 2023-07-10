const mongoose = require('mongoose')


const cvModel = mongoose.model('cv', new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    Introduction : String,
    file : String
}))


module.exports = cvModel