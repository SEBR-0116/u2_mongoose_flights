const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: String, required: true},
        price: {type: Number, required: true},
        number_of_seats: {type: Number, required: true},
        departing_airport: {type: Schema.Types.ObjectId, ref: 'departing_airport'},
        arrival_airport: {type: Schema.Types.ObjectId, ref: 'arrival_airport'},
        departure_date: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Airport