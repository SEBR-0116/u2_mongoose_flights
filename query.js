const db = require('./db')
const { Airport, Flight } = require('./models')

const findFlight = async () => {
  const flights = await Flight.find({flight_number: 441942}).populate('departingAirport').populate('arrivingAirport')
  console.log(flights)
}

const createFlight = async () => {
  const airport = await Airport.findOne()

  let flight = await Flight.create({
    airline: "Dream",
    flight_number: B56789,
    price: 460,
    numberOfSeats: 300,
    departingAirport: hartsfield[0]._id,
    arrivingAirport: orlando[0]._id,
    departure_date: "2024-03-18"
  })
  console.log(flight)
}

const updateFlight = async () => {
  const updated = await Flight.updateOne(
      { airline: "Dream" },
      { airline: "Dreamers" }
  )
  console.log(updated)
}

const deleteFlightandAir = async () => {
  let deletedfl = await Flight.deleteOne({ flight_number: 441942 })
  console.log(deletedfl)
 // let deletedair = await Airport.deleteOne({ name: "Hartsfield Jackson Atlanta" })
 // console.log(deletedair)
}

async function main() {
  try {
     await findFlight()
    //   await createFlight()
    //   await updateFlight()
     // await deleteFlightandAir()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()