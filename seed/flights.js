
const Flight = require('../models/flight');

const flights = [
    { airline: 'American Airlines', flightNumber: 101, price: 200, numberOfSeats: 150, departureDateTime: new Date('2024-03-01T08:00:00'), arrivalDateTime: new Date('2024-03-01T10:30:00') },
    { airline: 'Delta Air Lines', flightNumber: 201, price: 250, numberOfSeats: 200, departureDateTime: new Date('2024-03-02T09:30:00'), arrivalDateTime: new Date('2024-03-02T12:00:00') },
    { airline: 'British Airways', flightNumber: 301, price: 300, numberOfSeats: 180, departureDateTime: new Date('2024-03-03T12:00:00'), arrivalDateTime: new Date('2024-03-03T16:30:00') },
    { airline: 'Japan Airlines', flightNumber: 401, price: 350, numberOfSeats: 170, departureDateTime: new Date('2024-03-04T14:15:00'), arrivalDateTime: new Date('2024-03-04T18:45:00') },
    { airline: 'American Airlines', flightNumber: 102, price: 210, numberOfSeats: 150, departureDateTime: new Date('2024-03-05T08:30:00'), arrivalDateTime: new Date('2024-03-05T11:00:00') },
    { airline: 'Delta Air Lines', flightNumber: 202, price: 260, numberOfSeats: 200, departureDateTime: new Date('2024-03-06T10:00:00'), arrivalDateTime: new Date('2024-03-06T12:30:00') },
    { airline: 'British Airways', flightNumber: 302, price: 320, numberOfSeats: 180, departureDateTime: new Date('2024-03-07T13:45:00'), arrivalDateTime: new Date('2024-03-07T17:15:00') }
];


const seedFlights = async () => {
    try {
        await Flight.insertMany(flights);
        console.log('Flights seeded successfully');
    } catch (error) {
        console.error('Error seeding flights:', error);
    }
};

module.exports = seedFlights;
