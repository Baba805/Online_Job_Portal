const mongoose = require('mongoose');

const adminModel = mongoose.model('admin', new mongoose.Schema({
    username : String,
    password : String
}))

module.exports = adminModel