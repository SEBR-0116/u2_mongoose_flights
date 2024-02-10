
const db = require('./db')
const { Flight, Airport } = require('./models')

const displayFlightsAndAirports = async () => {
  const airports = await Airport.find({}, {name:1})
  const flights = await Flight.find({}, {airline: 1, flightNumber: 1, departingAirport: 1, departureDateTime: 1, arrivalAirport: 1})
  console.log(flights, airports)
}

const getFlightsById = async (id) => {
  const flight = await Flight.findById(id)
  console.log(flight)
} 

const createFlights = async () => {
   await Flight.insertMany()
   const flight = await Flight.create({
    airline: 'Jet Blue',
    flightNumber: 76543,
    price: 450,
    numberOfSeats: 250,
    departingAirport: losAngeles[1]._id,
    arrivalAirport: washingtonDulles[3]._id,
    departureDateTime: "2024-02-14T12:00:00",
   })
    console.log(flight)
 }

 const updateFlight = async () => {
  const updated = await Flight.updateOne({airline:'United Airlines'},
  { $set: { departureDateTime: new Date("2024-02-11T11:00:00") } }
    
  )
  console.log(updated)
}

const updateAirport = async () => {
  const updated = await Airport.updateOne({name:'John F. Kennedy International Airport'},
      {$rename:{ name: 'JFK'}}
  )
  console.log(updated)
}
const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({ airline: 'American Airlines' })
  console.log(deleted)
}

const deleteAirport = async () => {
  let deleted = await Airport.deleteOne({ name: 'San Francisco International Airport' })
  console.log(deleted)
}


async function main() {
  try {
  //await displayFlightsAndAirports()
  //await getFlightsById('65c795c1038a354d55bb2e08') 
  //await createFlights()
  //await updateFlight()
  // await updateAirport()
  //await deleteFlight()
  //await deleteAirport()


  
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()



