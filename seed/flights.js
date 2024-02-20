const db = require('../db')
const { Flight } = require('../models')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const LAX = await Airport.find({ code: 'LAX' })
  // London Heathrow
  const LHR = await Airport.find({ code: "LHR" })
  // Tokyo Henada
  const HND = await Airport.find({ code: "HND" })
  // Dubai International
  const DXB = await Airport.find({ code: "DXB" })
  // Dallas
  const DFW = await Airport.find({ code: "DFW" })
  // Beijing
  const PEK = await Airport.find({code: 'PEK'})

  const models = [
    {
      airline: 'British Airways',
      flightNumber: "BA05",
      price: "1500",
      numberOfSeats: 100,
      departingAirport: LHR[0]._id,
      arrivalAirport: HND[0]._id,
      departureTime: "2024-02-20T11:50:00.000Z"
    },
    {
      airline: 'Air China',
      flightNumber: "CA818",
      price: "1000",
      numberOfSeats: 200,
      departingAirport: LAX[0]._id,
      arrivalAirport: PEK[0]._id,
      departureTime: "2024-02-20T21:05:00.000Z"
    },
    {
      airline: 'Emirates',
      flightNumber: "EK306",
      price: "1200",
      numberOfSeats: 230,
      departingAirport: DXB[0]._id,
      arrivalAirport: PEK[0]._id,
      departureTime: "2024-02-20T03:20:00.000Z"
    },
    {
      airline: 'Delta',
      flightNumber: "DL337",
      price: "150",
      numberOfSeats: 100,
      departingAirport: DFW[0]._id,
      arrivalAirport: LAX[0]._id,
      departureTime: "2024-02-20T06:00:00.000Z"
    },
    {
      airline: 'Japan Airlines',
      flightNumber: "JAL42",
      price: "900",
      numberOfSeats: 220,
      departingAirport: LHR[0]._id,
      arrivalAirport: HND[0]._id,
      departureTime: "2024-02-20T09:55:00.000Z"
    },
    {
      airline: 'Emirates',
      flightNumber: "BA106",
      price: "1000",
      numberOfSeats: 220,
      departingAirport: DXB[0]._id,
      arrivalAirport: LHR[0]._id,
      departureTime: "2024-02-20T02:10:00.000Z"
    },
    {
      airline: 'Japan Airlines',
      flightNumber: "JAL20",
      price: "500",
      numberOfSeats: 290,
      departingAirport: PEK[0]._id,
      arrivalAirport: HND[0]._id,
      departureTime: "2024-02-20T08:35:00.000Z"
    },
  ]

  await Flight.insertMany(models)
  console.log('inserted flights.')
}

const run = async () => {
  await main()
  db.close()
}

run()