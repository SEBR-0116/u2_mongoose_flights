const db = require("./db");
const { Flight, Airport } = require("./models");

const findFlights = async () => {
  const flights = await Flight.find();
  console.log(flights);
};

const createFlight = async () => {
  const airport = await Airport.findOne();

  let flight = await Flight.create({
    airline: "SouthWest Airlines",
    flightNumber: 4865,
    price: 437,
    numberOfSeats: 225,
    departingAirport: "Charlotte Douglas International Airport",
    arrivalAirport: "San Diego International Airport",
  });
  console.log(flight);
};

const updateFlight = async () => {
  const updated = await Flight.updateOne({
    airline: "SouthWest Airlines",
    flightNumber: 4865,
    price: 437,
    numberOfSeats: 225,
    departingAirport: "Charlotte Douglas International Airport",
    arrivalAirport: "San Diego International Airport",
  });
  console.log(updated);
};

const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({ flight: "American Airlines" });
  console.log(deleted);
};

async function main() {
  try {
    //await findFlight()
    //await createFlight()
    //await updateFlight()
    await deleteFlight();
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
  }
}

main();
