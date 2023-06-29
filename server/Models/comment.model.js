const mongoose = require('mongoose')


const commentModel = mongoose.model('comment', new mongoose.Schema({
    name : String,
    title : String,
    posession : String,
    imageUrl : String
}))


module.exports = commentModel