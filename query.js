const { Airport, Flight } = require('./index');

async function viewFlightsAndAirports() {
  try {
    const flights = await Flight.find().populate('departingAirport arrivalAirport');
    console.log('Flights:', flights);
  } catch (error) {
    console.error('Error fetching flights:', error);
  }

  try {
    const airports = await Airport.find();
    console.log('Airports:', airports);
  } catch (error) {
    console.error('Error fetching airports:', error);
  }
}

async function getFlightAndAirportById(flightId, airportId) {
  try {
    const flight = await Flight.findById(flightId).populate('departingAirport arrivalAirport');
    console.log('Flight:', flight);
  } catch (error) {
    console.error('Error fetching flight by ID:', error);
  }

  try {
    const airport = await Airport.findById(airportId);
    console.log('Airport:', airport);
  } catch (error) {
    console.error('Error fetching airport by ID:', error);
  }
}

async function createFlightAndAirport() {
  try {
    const airport = await Airport.create({ name: 'New Airport', location: 'New Location', code: 'MNO' });
    console.log('Airport created:', airport);

    const flight = await Flight.create({
      airline: 'New Airline',
      flightNumber: 456,
      price: 300,
      numberOfSeats: 150,
      departingAirport: airport._id,
      arrivalAirport: airport._id,
      departureDateTime: new Date()
    });
    console.log('Flight created:', flight);
  } catch (error) {
    console.error('Error creating flight and airport:', error);
  }
}

async function updateFlightAndAirport(flightId, airportId) {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(flightId, { price: 400 }, { new: true });
    console.log('Updated flight:', updatedFlight);
  } catch (error) {
    console.error('Error updating flight:', error);
  }

  try {
    const updatedAirport = await Airport.findByIdAndUpdate(airportId, { location: 'Updated Location' }, { new: true });
    console.log('Updated airport:', updatedAirport);
  } catch (error) {
    console.error('Error updating airport:', error);
  }
}

async function deleteFlightAndAirport(flightId, airportId) {
  try {
    await Flight.findByIdAndDelete(flightId);
    console.log('Flight deleted.');
  } catch (error) {
    console.error('Error deleting flight:', error);
  }

  try {
    await Airport.findByIdAndDelete(airportId);
    console.log('Airport deleted.');
  } catch (error) {
    console.error('Error deleting airport:', error);
  }
}
