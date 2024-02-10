const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, min: 138, max: 204, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'Airport', required: true},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: 'Airport', required: true},
        departureDateTime: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('flights', Flight)
