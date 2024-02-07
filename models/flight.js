const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_no: {type: String, required: true},
        price: {type: Number, required: true},
        no_of_seats: {type: Number, required: true},
        departure_airport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        arrival_airport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        departure_time: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Flight