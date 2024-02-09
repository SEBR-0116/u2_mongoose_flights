const mongoose = require('mongoose')
const AirportSchema = require('./airport')
const FlightSchema = require('./flight')

const Airport = mongoose.model('airport', AirportSchema)
const Flight = mongoose.model('flight', FlightSchema)

module.exports = {
    Airport,
    Flight
}