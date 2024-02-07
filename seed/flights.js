const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))



const main = async () => {
    const airports = await Airport.find({})
    console.log(airports)
    
    const flights = [
        {
            airline: 'ITA Airways',
            flight_number: 'AZ1637',
            price: 400,
            number_of_seats: 56,
            departing_airport: airports[3]._id,
            arrival_airport: airports[0]._id,
            departure_date: Date.UTC(2023, 10, 22, 7)
        },
        {
            airline: 'ITA Airways',
            flight_number: 'AZ1603',
            price: 200,
            number_of_seats: 200,
            departing_airport: airports[2]._id,
            arrival_airport: airports[0].i_id,
            departure_date: Date.UTC(2023,6,23,21,20)
        },
        {
            airline: 'Lufthansa',
            flight_number: 'AZ1823',
            price: 200,
            number_of_seats: 200,
            departing_airport: airports[2]._id,
            arrival_airport: airports[0].i_id,
            departure_date: Date.UTC(2023,6,21,22,45)
        },
        {
            airline: 'Lufthansa',
            flight_number: 'AZ2423',
            price: 1300,
            number_of_seats: 560,
            departing_airport: airports[1]._id,
            arrival_airport: airports[2].i_id,
            departure_date: Date.UTC(2024,1,14,22,45)
        },
        {
            airline: 'Norse Atlantic',
            flight_number: 'AZ1223',
            price: 200,
            number_of_seats: 200,
            departing_airport: airports[1]._id,
            arrival_airport: airports[2].i_id,
            departure_date: Date.UTC(2024,5,21,22,45)
        },
        {
            airline: 'Lufthansa',
            flight_number: 'AZ5523',
            price: 350,
            number_of_seats: 200,
            departing_airport: airports[3]._id,
            arrival_airport: airports[2].i_id,
            departure_date: Date.UTC(2022,6,21,22,45)
        },
        {
            airline: 'ITA Airways',
            flight_number: 'AZ1983',
            price: 200,
            number_of_seats: 200,
            departing_airport: airports[0]._id,
            arrival_airport: airports[3].i_id,
            departure_date: Date.UTC(2022,0,21,22,45)
        },
    ]

    await Flight.insertMany(flights)
    console.log('Flights logged into Database')
}

const run = async () => {
    await main()
    db.close()
}

run()