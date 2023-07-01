const mongoose = require('mongoose')



const vacanciesModel = mongoose.model('vacancies', new mongoose.Schema({
    name : String,
    imageUrl : String,
    sale : Number,
    location : String,
    time : String,
    companyName : String
}))


module.exports = vacanciesModel