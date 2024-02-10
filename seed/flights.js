const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const johnKennedy = await Airport.find({ name: 'John F. Kennedy International Airport' })
  const losAngeles = await Airport.find({ name: 'Los Angeles International Airport' })
  const baltimoreWashington = await Airport.find({ name: 'Baltimore Washington International Airport' })
  const washingtonDulles = await Airport.find({ name: 'Washington Dulles International Airport' })

  const flights = [
    {
      airline: 'American Airlines',
      flightNumber: 123,
      price: 350 ,
      numberOfSeats: 100,
      departingAirport: johnKennedy[0]._id,
      arrivalAirport: losAngeles[1]._id,
      departureDateTime: "2024-02-10T08:00:00",
    },
    {
        airline: 'Delta',
        flightNumber: 4567,
        price: 90 ,
        numberOfSeats: 150,
        departingAirport: baltimoreWashington[2]._id,
        arrivalAirport: losAngeles[1]._id,
        departureDateTime: "2024-02-11T12:30:00",
    },
    {
        airline: 'United Airlines',
        flightNumber: 9876,
        price: 400 ,
        numberOfSeats: 200,
        departingAirport: washingtonDulles[3]._id,
        arrivalAirport: johnKennedy[0]._id,
        departureDateTime: "2024-02-12T10:00:00",
    },
    {
        airline: 'American Airlines',
        flightNumber: 4490,
        price: 200 ,
        numberOfSeats: 200,
        departingAirport: washingtonDulles[3]._id,
        arrivalAirport: losAngeles[1]._id,
        departureDateTime: "2024-02-13T11:00:00",
    },
    {
        airline: 'Jet Blue',
        flightNumber: 22334,
        price: 180 ,
        numberOfSeats: 200,
        departingAirport: johnKennedy[0]._id,
        arrivalAirport: baltimoreWashington[2]._id,
        departureDateTime: "2024-02-13T11:00:00",
    },
    {
        airline: 'Jet Blue',
        flightNumber: 76543,
        price: 450 ,
        numberOfSeats: 250,
        departingAirport: losAngeles[1]._id,
        arrivalAirport: johnKennedy[0]._id,
        departureDateTime: "2024-02-11T11:00:00",
    },
    {
        airline: 'Delta',
        flightNumber: 9182,
        price: 310 ,
        numberOfSeats: 100,
        departingAirport: losAngeles[1]._id,
        arrivalAirport: washingtonDulles[3]._id,
        departureDateTime: "2024-02-14T12:00:00",
    },
  ]

  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()