const { Airport, Flight } = require('./index');

async function seedData() {
  try {
    const airport1 = await Airport.create({ name: 'Hartsfield-Jackson', location: 'Atlanta', code: 'ABC' });
    const airport2 = await Airport.create({ name: 'Denver International', location: 'Denver', code: 'DEF' });
    const airport3 = await Airport.create({ name: 'LAX', location: 'Los Angeles', code: 'GHI' });
    const airport4 = await Airport.create({ name: 'JFK', location: 'New York', code: 'JKL' });

    await Flight.create({
      airline: 'Hartsfield-Jackson',
      flightNumber: 123,
      price: 200,
      numberOfSeats: 100,
      departingAirport: airport1._id,
      arrivalAirport: airport2._id,
      departureDateTime: new Date()
    })
    await Flight.create({
        airline: 'Hartsfield-Jackson',
        flightNumber: 124,
        price: 300,
        numberOfSeats: 150,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })
    await Flight.create({
        airline: 'Hartsfield-Jackson',
        flightNumber: 125,
        price: 200,
        numberOfSeats: 100,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })
    await Flight.create({
        airline: 'JFK',
        flightNumber: 126,
        price: 400,
        numberOfSeats: 200,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })
    await Flight.create({
        airline: 'LAX',
        flightNumber: 127,
        price: 300,
        numberOfSeats: 150,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })
    await Flight.create({
        airline: 'Denver International',
        flightNumber: 128,
        price: 300,
        numberOfSeats: 100,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })
    await Flight.create({
        airline: 'LAX',
        flightNumber: 129,
        price: 500,
        numberOfSeats: 50,
        departingAirport: airport1._id,
        arrivalAirport: airport2._id,
        departureDateTime: new Date()
      })

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
