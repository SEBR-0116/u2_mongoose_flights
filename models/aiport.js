
const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    name: String,
    location: String,
    code: String
});

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
