
//we can now give those schemas a name to work with so we can refer to and work with them
const mongoose = require('mongoose')
const FlightSchema = require('./flight')
const AirportSchema = require('./airport')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Flight = mongoose.model('Flight', FlightSchema)
const Airport = mongoose.model('Airport',AirportSchema)

module.exports = {
  Flight,
  Airport
}