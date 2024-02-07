const db = require('./db');
const { Airport, Flight } = require('./models');

const LaGuardiaAirport = await Airport.findOne({ name: 'LaGuardia Airport' });
const JFKAirport = await Airport.findOne({ name: 'JFK Airport' });
const StewartAirport = await Airport.findOne({ name: 'Stewart Airport' });
const LongIslandMacArthurAirport = await Airport.findOne({ name: 'Long Island MacArthur Airport' });
const fujianAirport = await Airport.findOne({ name: 'Fujian Airport' });
const xiamenAirport = await Airport.findOne({ name: 'Xiamen Airport' });
const tianjingAirport = await Airport.findOne({ name: 'Tianjing Airport' });
const beijingAirport = await Airport.findOne({ name: 'Beijing Airport' });


const findFlight = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

const findFlightByID = async () => {
    const flight = await Flight.findById('65c303edc4fa8e186af867de');
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

const createFlight = async () => {
    const airport = await Airport.findOne()

    let flight = await Flight.create({
         airline: Eastern_Airline,
         depart_airport:tianjing_Airport, 
         arrival_airport:San_Francisco_Airport 
})
    console.log(flight)
}


const updateFlight = async () => {
    const updated = await Flight.updateOne(
        { airline: China_Airline,},
        { depart_airport:tianjing_Airport },
        { arrival_airport:San_Francisco_Airport }
    )
    console.log(updated)
  }
  const deleteBook = async () => {
    let deleted = await Flight.deleteOne({  airline: China_Airline })
    console.log(deleted)
  }


async function main() {
    try {
    await findFlight()
    await findFlightByID()
    await findAirportById()
    await createFlight()
    await updateFlight()
    await deleteFlight()
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }

  main()