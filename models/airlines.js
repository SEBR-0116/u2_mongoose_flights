const {Schema} = require('mongoose')

const Airlines = new Schema (
  {
    airline: {type: String, required: true},
    flight_number: {type: Number, required: true},
    price: {type: Number, required: true},
    number_of_seats: {type: Number, required: true},
    departure_date_time: {type: String, required: true},
    airport_id: {type: Schema.Types.ObjectId, ref: 'Airports'}
  },

  {timestamps: true}
)

module.exports = Airlines