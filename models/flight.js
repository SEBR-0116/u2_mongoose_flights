const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Flight = new Schema(
    {
      airline: { type: String, required: true },
      flightNumber: { type: String, required: true },
      price: { type: String, required: true },
      numberOfSeats: { type: Number, required: true },
      departingAirport: { type: Schema.Types.ObjectId, required: true , ref: 'Airport'},
      arrivalAirport: { type: Schema.Types.ObjectId, required: true, ref:'Airport'},
      departureTime: {type: Date}
    },
    { timestamps: true },
)

module.exports = Flight
