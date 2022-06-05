const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    cards : {
        type: Array,
        required: true,
        default: []
    }
})

module.exports = mongoose.model('List', listSchema)