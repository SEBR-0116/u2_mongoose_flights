const mongoose = require ('mongoose')

const AirportSchema = require('./Airport') //require calls the reference
const FlightSchema = require('./Flight')

const Airport = mongoose.model('Airport', AirportSchema) //converting schema to a model
const Flight = mongoose.model('Flight', FlightSchema)

module.exports = {
    Airport,
    Flight
}