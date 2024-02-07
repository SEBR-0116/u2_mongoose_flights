const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flightsDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const airportSchema = new mongoose.Schema({
  name: String,
  location: String,
  code: String
});

const flightSchema = new mongoose.Schema({
  airline: String,
  flightNumber: Number,
  price: Number,
  numberOfSeats: Number,
  departingAirport: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport' },
  arrivalAirport: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport' },
  departureDateTime: Date
});

const Airport = mongoose.model('Airport', airportSchema);
const Flight = mongoose.model('Flight', flightSchema);

module.exports = { Airport, Flight };
