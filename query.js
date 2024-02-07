const db = require('./db');
const { Airport, Flight } = require('./models');

const findFlight = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

const findFlightByID = async (flightId) => {
    const flight = await Flight.findById(flight_Id:flight);
    console.log('Flight details:', flight);
}
const findAirportById = async (airportId) => {
    try {
      const airport = await Airport.findById(airportId);
      if (!airport) {
        console.log('Airport not found');
      } else {
        console.log('Airport details:', airport);
      }
    } catch (error) {
      console.error('Error finding airport:', error);
    }
  };

// const createFlight = async () => {
//     const airport = await Airport.findOne()

//     let flight = await Flight.create({
//          airline: Eastern_Airline,
//          depart_airport:tianjing_Airport, 
//          arrival_airport:San_Francisco_Airport 
// })
//     console.log(flight)
// }


// const updateFlight = async () => {
//     const updated = await Flight.updateOne(
//         { airline: China_Airline,},
//         { depart_airport:tianjing_Airport },
//         { arrival_airport:San_Francisco_Airport }
//     )
//     console.log(updated)
//   }
//   const deleteBook = async () => {
//     let deleted = await Flight.deleteOne({  airline: China_Airline })
//     console.log(deleted)
//   }


async function main() {
    try {
    await findFlight()
    await findFlightByID()
    await findAirportById()
    // await createFlight()
    // await updateFlight()
    // await deleteFlight()
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }

  main()