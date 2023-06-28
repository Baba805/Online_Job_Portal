const mongoose = require('mongoose')


const PriceModel = mongoose.model('price', new mongoose.Schema({
    price : Number,
    service_one : String,
    service_two : String,
    service_three : String,
    service_four : String,
    service_five : String,
}))


module.exports = PriceModel