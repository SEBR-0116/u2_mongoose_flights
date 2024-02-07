const db = require('./db')
const { Airlines, Airports } = require('./models')

const findFlights = async () => {
  const houston = await Airports.find({ airport_name: 'George Bush Intercontinental Airport' })
  const florida = await Airports.find({ airport_name: 'Orlando International Airport' })
  const california = await Airports.find({ airport_name: 'San Diego International Airport' })
  const dublin = await Airports.find({ airport_name: 'Dublin Airport' })

//   const houstonFlights = await Airlines.find({ airport_id: houston[0]._id }, 'airline flight_number departure_date_time').populate('airport_id')
//   const floridaFlights = await Airlines.find({ airport_id: florida[0]._id }, 'airline flight_number departure_date_time').populate('airport_id')
//   const californiaFlights = await Airlines.find({ airport_id: california[0]._id }, 'airline flight_number departure_date_time').populate('airport_id')
//   const dublinFlights = await Airlines.find({ airport_id: dublin[0]._id }, 'airline flight_number departure_date_time').populate('airport_id')

  //console.log(houstonFlights)
}




// const createFlight = async () => {
//   const airports = await Airports.findOne()

//   let airline = Airlines.create({
//     airline: 'Delta',
//     flight_number: 999,
//     price: 199,
//     number_of_seats: 20,
//     departure_date_time: 'Feb 8, 2024, 1600',
//     airport_id: airports._id
//   })
//   console.log(airline)
// }




// const deleteFlight = async () => {
//   let deleted = await Airlines.deleteOne({flight_number: 747})
//   console.log(deleted)
// }




// const flightInfo = async () => {  
//   const flightById = await Airlines.findById('65c2bebf3fa2bf76d80af3a7')
//   console.log(flightInfo)
// }


// const updateFlight = async () => {
//   const updated = await Airlines.updateOne(
//       { price: 250 },
//       { price: 550 }
//   )
//   console.log(updated)
// }





async function main() {
  try {
      //await findFlights()
      //await flightInfo()
      //await createFlight()
      //await updateFlight()
      //await deleteFlight()

  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()