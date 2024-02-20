
const Airport = require('../models/aiport');

const airports = [
    { name: 'John F. Kennedy International Airport', location: 'New York City, New York, USA', code: 'JFK' },
    { name: 'Los Angeles International Airport', location: 'Los Angeles, California, USA', code: 'LAX' },
    { name: 'Heathrow Airport', location: 'London, United Kingdom', code: 'LHR' },
    { name: 'Narita International Airport', location: 'Tokyo, Japan', code: 'NRT' }
];

const seedAirports = async () => {
    try {
        await Airport.insertMany(airports);
        console.log('Airports seeded successfully');
    } catch (error) {
        console.error('Error seeding airports:', error);
    }
};

module.exports = seedAirports;
