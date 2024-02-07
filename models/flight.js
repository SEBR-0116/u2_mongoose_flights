const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    departingAirport: { type: Schema.Types.ObjectId,ref: 'airport_id'  },
    ArrivalAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
    airline: { type: String, required: true },
    flight_number: { type: Number, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    
  },
  { timestamps: true }
)

module.exports = Flight