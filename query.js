const db = require('./db')
const { Airport, Flight } = require('./models')

const getAllFlights = async () => {
  const flights = await Flight.find({})
  flights.forEach((flight) => {
    console.log(`
    Airline: ${flight.airline},
    Flight Number: ${flight.flightNumber},
    Price: ${flight.price},
    Seats: ${flight.numberOfSeats},
    From: ${flight.departingAirport},
    To: ${flight.arrivalAirport}
    `)
  })
}

const getFlightById = async (id) => {
  const flight = await Flight.find({ _id: id })
  console.log(`Your search by ID flight is: ${flight}`)
}

const createFlight = async () => {
  const departingAirport = await Airport.findOne({ code: "DXB" })
  const arrivalAirport = await Airport.findOne({ code: "LHR" })
  
  const addFlight = await Flight.create({
    airline: "Air China",
    flightNumber: "CA988",
    price: '900',
    numberOfSeats: 100,
    departingAirport: departingAirport._id,
    arrivalAirport: arrivalAirport._id,
    departureTime: "2024-02-20T01:50:00.000Z"
  })
}

const updateFlight = async (id, newAirline, newFlightNum, newPrice, newDeparting, newArrival) => {

  const flight = await Flight.findOneAndUpdate({ _id: id }, {
    airline: newAirline,
    flightNumber: newFlightNum,
    price: newPrice,
    departingAirport: newDeparting,
    arrivalAirport: newArrival
  })
}

const deleteFlight = async (id) => {
  const flight = await Flight.deleteOne({ _id: id })
}



// getAllFlights()
// getFlightById("65d3d218b63df590d5abf6b9")
// createFlight()
// updateFlight('65d3d218b63df590d5abf6b9', "ANA Airlines", "ANA09", 190, "65d3d1f17355ba1968ee4488", "65d3d1f17355ba1968ee4483")
deleteFlight('65d3d218b63df590d5abf6b9')

