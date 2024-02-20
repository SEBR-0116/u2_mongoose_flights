const mongoose = require('mongoose');
const Airport = require('./models/aiport');
const Flight = require('./models/flight');


mongoose.connect('mongodb://localhost/flightsDatabase', { useNewUrlParser: true, useUnifiedTopology: true });


const viewAllFlightsAndAirports = async () => {
  try {
    const flights = await Flight.find();
    console.log('All flights:');
    console.log(flights);

    const airports = await Airport.find();
    console.log('All airports:');
    console.log(airports);
  } catch (error) {
    console.error('Error viewing flights and airports:', error);
  }
};

const createFlightAndAirport = async () => {
  try {
    const newAirport = new Airport({
      name: 'New Airport',
      location: 'New Location',
      code: 'NEW'
    });
    const savedAirport = await newAirport.save();
    console.log('New airport created successfully:');
    console.log(savedAirport);

    const newFlight = new Flight({
      airline: 'New Airline',
      flightNumber: 123,
      price: 300,
      numberOfSeats: 200,
      departureDateTime: new Date(),
      arrivalDateTime: new Date(),
      departingAirport: savedAirport._id,
      arrivalAirport: savedAirport._id
    });
    const savedFlight = await newFlight.save();
    console.log('New flight created successfully:');
    console.log(savedFlight);
  } catch (error) {
    console.error('Error creating flight and airport:', error);
  }
};

const updateFlightAndAirport = async () => {
  try {
   
    const flightToUpdate = await Flight.findOne({ airline: 'American Airlines' });
    if (flightToUpdate) {
      flightToUpdate.price += 50; 
      const updatedFlight = await flightToUpdate.save();
      console.log('Flight updated successfully:');
      console.log(updatedFlight);
    } else {
      console.log('Flight not found');
    }

    const airportToUpdate = await Airport.findOne({ code: 'JFK' });
    if (airportToUpdate) {
      airportToUpdate.location = 'Updated Location';
      const updatedAirport = await airportToUpdate.save();
      console.log('Airport updated successfully:');
      console.log(updatedAirport);
    } else {
      console.log('Airport not found');
    }
  } catch (error) {
    console.error('Error updating flight and airport:', error);
  }
};

const deleteFlightAndAirport = async () => {
  try {
  
    const flightToDelete = await Flight.findOneAndDelete({ airline: 'New Airline' });
    console.log('Flight deleted successfully:');
    console.log(flightToDelete);

    
    const airportToDelete = await Airport.findOneAndDelete({ code: 'NEW' });
    console.log('Airport deleted successfully:');
    console.log(airportToDelete);
  } catch (error) {
    console.error('Error deleting flight and airport:', error);
  } finally {
   
    mongoose.connection.close();
  }
};

viewAllFlightsAndAirports();
createFlightAndAirport();
updateFlightAndAirport();
deleteFlightAndAirport();
