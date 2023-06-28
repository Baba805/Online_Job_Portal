const mongoose = require('mongoose')


const ourTeamModel = mongoose.model('ourteam', new mongoose.Schema({
    name : String,
    imageUrl : String,
    posession : String
}))


module.exports = ourTeamModel