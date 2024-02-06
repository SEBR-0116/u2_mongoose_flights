const { Schema } = require('mongoose')

const Company = new Schema (
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        code: { type: String, required: true }
    },
    { timestamps: true}    
)
 module.exports = Airport