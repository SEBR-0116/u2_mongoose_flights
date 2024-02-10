const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Airport = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        code: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('airports', Airport)
