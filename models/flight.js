const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNumber: Number,
    price: Number,
    numberOfSeats: Number,
    departureDateTime: Date,
    arrivalDateTime: Date,
    departingAirport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Airport'
    },
    arrivalAirport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Airport'
    }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

