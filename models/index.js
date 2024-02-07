const mongoose = require('mongoose')
const AirlinesSchema = require('./airlines')
const AirportsSchema = require('./airports')

const Airlines = mongoose.model('Airlines', AirlinesSchema)
const Airports = mongoose.model('Airports', AirportsSchema)

module.exports = {
  Airlines,
  Airports
}