const db = require('../db')
const {Airports, Airlines} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const houston = await Airports.find({ airport_name: 'George Bush Intercontinental Airport' })
  const florida = await Airports.find({ airport_name: 'Orlando International Airport' })
  const california = await Airports.find({ airport_name: 'San Diego International Airport' })
  const dublin = await Airports.find({ airport_name: 'Dublin Airport' })

  const airlines = [
    {
      airline: 'Delta',
      flight_number: 787,
      price: 250,
      number_of_seats: 38,
      departure_date_time: 'Feb 8, 2024, 1600',
      airport_id: houston[0]._id
    },
    {
      airline: 'Spirit',
      flight_number: 893,
      price: 150,
      number_of_seats: 30,
      departure_date_time: 'Feb 12, 2024, 1230',
      airport_id: california[0]._id 
    },
    {
      airline: 'Aer Lingus',
      flight_number: 572,
      price: 200,
      number_of_seats: 40,
      departure_date_time: 'Feb 28, 2024, 1315',
      airport_id: dublin[0]._id
    },
    {
      airline: 'United',
      flight_number: 747,
      price: 300,
      number_of_seats: 50,
      departure_date_time: 'Feb 15, 2024, 1735',
      airport_id: florida[0]._id 
    },
    {
      airline: 'Frontier',
      flight_number: 284,
      price: 250,
      number_of_seats: 38,
      departure_date_time: 'Feb 9, 2024, 0955',
      airport_id: houston[0]._id
    },
    {
      airline: 'American Airlines',
      flight_number: 583,
      price: 400,
      number_of_seats: 60,
      departure_date_time: 'Feb 21, 2024, 0725',
      airport_id: florida[0]._id 
    },
    {
      airline: 'Southwest',
      flight_number: 835,
      price: 350,
      number_of_seats: 38,
      departure_date_time: 'Feb 14, 2024, 2135',
      airport_id: california[0]._id
    }
  ]
  await Airlines.insertMany(airlines)
  console.log('Here comes the planes!')
}

const run = async () => {
  await main()
  db.close()
}

run()