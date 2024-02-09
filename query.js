const db = require('./flightDatabase')
const { Airport, Flight } = require('./models')


// Function to list all flights and airports
async function listAllFlightsAndAirports() {
  const flights = await Flight.find().populate('departingAirport arrivalAirport');
  const airports = await Airport.find();
  return { flights, airports };
}

// Function to find a flight or airport by ID
async function findById(model, id) {
  return model.findById(id);
}

// Function to create a flight
async function createFlight(data) {
  return Flight.create(data);
}

// Function to update a flight or airport
async function updateById(model, id, updateData) {
  return model.findByIdAndUpdate(id, updateData, { new: true });
}

// Function to delete a flight or airport
async function deleteById(model, id) {
  return model.findByIdAndDelete(id);
}

module.exports = {
  listAllFlightsAndAirports,
  findById,
  createFlight,
  updateById,
  deleteById,
};




async function main() {
    try { 
    //    const results = await listAllFlightsAndAirports()
    //    console.log(results)

    //    const results = await findById(Airport, "65c5a0790244f4d9f9ff9cff")
    //    console.log(results)

    // const results = await createFlight({
    //     airline: "Delta",
    //     flightNumber: 4678,
    //     price: 2300,
    //     numberOfSeats: 303,
    //     departingAirport: "LAX",
    //     arrivalAirport: "TPA",
    //     departureDate: Date.UTC(2024, 5, 29),
    // })
    // console.log(results)

    // const results = await updateById(Flight, "65c5a525a66ba408d1515abf",  {
    //     airline: 'Southwest',
    //     flightNumber: 7654,
    //     price: 405,
    //     numberOfSeats: 205,
    //     departingAirport: 'MSY',
    //     arrivalAirport: 'DEN',
    //     departureDate: Date.UTC(2024, 4 , 7)
    // }
    // )
    // console.log(results)

    const results = await deleteById(Flight, "65c5a525a66ba408d1515abf")
    console.log(results)
    
    }catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()