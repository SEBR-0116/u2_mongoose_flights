const { Schema } = require('mongoose')

const Airports = new Schema(
  {
    airport_name : { type: String, required: true},
    location : { type: String, required: true},
    code : { type: String, required: true},
  },
  { timestamps : true }
)

module.exports = Airports