const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'Mongo connection error!'))

const main = async () => {
    const sanFrancisco = await Airport.find({ name: 'San Francisco International Airport'})
    const chicago = await Airport.find({ name: "O'Hare International Airport"})
    const dallas = await Airport.find({ name: "Dallas Fort Worth International Airport"})
    const atlanta = await Airport.find({ name: "Hartsfield-Jackson Atlanta International Airport"})

    const flights = [
    {
        airline: 'United Airlines',
        flight_number: 'UA830',
        price: 300,
        number_of_seats: 150,
        departing_airport: sanFrancisco[0]._id,
        arrival_airport: chicago[0]._id,
        departure_date_time: "2024-02-07T08:45:00"
    },
    {
        airline: 'United Airlines',
        flight_number: 'UA530',
        price: 350,
        number_of_seats: 125,
        departing_airport: sanFrancisco[0]._id,
        arrival_airport: dallas[0]._id,
        departure_date_time: "2024-02-07T10:30:00"
    },
    {
        airline: 'Delta Airlines',
        flight_number: 'UL520',
        price: 250,
        number_of_seats: 115,
        departing_airport: chicago[0]._id,
        arrival_airport: dallas[0]._id,
        departure_date_time: "2024-02-07T10:50:00"
    },
    {
        airline: 'Delta Airlines',
        flight_number: 'UL340',
        price: 290,
        number_of_seats: 175,
        departing_airport: chicago[0]._id,
        arrival_airport: atlanta[0]._id,
        departure_date_time: "2024-02-07T11:30:00"
    },
    {
        airline: 'American Airlines',
        flight_number: 'AA870',
        price: 310,
        number_of_seats: 215,
        departing_airport: atlanta[0]._id,
        arrival_airport: sanFrancisco[0]._id,
        departure_date_time: "2024-02-07T11:45:00"
    },
    {
        airline: 'American Airlines',
        flight_number: 'AA480',
        price: 210,
        number_of_seats: 165,
        departing_airport: atlanta[0]._id,
        arrival_airport: dallas[0]._id,
        departure_date_time: "2024-02-07T12:25:00"
    },
    {
        airline: 'American Airlines',
        flight_number: 'AA480',
        price: 200,
        number_of_seats: 155,
        departing_airport: atlanta[0]._id,
        arrival_airport: chicago[0]._id,
        departure_date_time: "2024-02-07T12:50:00"
    },
    ]
    await Flight.insertMany(flights)
    console.log('Created flights with airports')
}

const run = async () => {
    await main()
    db.close()
}
run()