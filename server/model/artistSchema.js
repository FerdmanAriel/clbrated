const mongoose = require('mongoose')

let artistSchema = mongoose.Schema;

let Artist = new artistSchema({
    name: String
})

module.exports = mongoose.model('artists', Artist)
