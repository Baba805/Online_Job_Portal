const mongoose = require('mongoose')


const blogModel = mongoose.model('blog', new mongoose.Schema({
    username : String,
    title : String,
    content : String,
    imageUrl : String
}))


module.exports = blogModel