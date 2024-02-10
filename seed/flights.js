const db = require('../db')
const Flight = require('../models/flight')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const flights = [
        {
            airline: 'SouthWest',
            flightNumber: 111,
            price: 170,
            numberOfSeats: 144,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: '2/9/2024:04.30'
        },
        {
            airline: 'SouthWest',
            flightNumber: 222,
            price: 190,
            numberOfSeats: 196,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: '2/9/2024:05.30'
        },
        {
            airline: 'SouthWest',
            flightNumber: 333,
            price: 235,
            numberOfSeats: 160,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: '2/9/2024:06.30'
        },
        {
            airline: 'Frontier',
            flightNumber: 444,
            price: 200,
            numberOfSeats: 186,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: '2/9/2024:15.00'
        },
        {
            airline: 'Frontier',
            flightNumber: 555,
            price: 400,
            numberOfSeats: 140,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[2]._id,
            departureDateTime: '2/9/2024:10.30'
        },
        {
            airline: 'Frontier',
            flightNumber: 666,
            price: 195,
            numberOfSeats: 188,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: '2/9/2024:12.30'
        },
        {
            airline: 'Spirit',
            flightNumber: 777,
            price: 185,
            numberOfSeats: 200,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: '2/9/2024:17.30'
        }
    ]

    await Flight.insertMany(flights)
    console.log("Created some flights!")
}
const run = async () => {
    await main()
    db.close()
}

run()