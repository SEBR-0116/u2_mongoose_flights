const db = require('../db');
const { Airport , Flight } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  // Finding the parent data to get their _id to reference for our children
  const LaGuardiaAirport = await Airport.findOne({ name: 'LaGuardia Airport' });
  const JFKAirport = await Airport.findOne({ name: 'JFK Airport' });
  const StewartAirport = await Airport.findOne({ name: 'Stewart Airport' });
  const LongIslandMacArthurAirport = await Airport.findOne({ name: 'Long Island MacArthur Airport' });
  const fujianAirport = await Airport.findOne({ name: 'Fujian Airport' });
  const xiamenAirport = await Airport.findOne({ name: 'Xiamen Airport' });
  const tianjingAirport = await Airport.findOne({ name: 'Tianjing Airport' });
  const beijingAirport = await Airport.findOne({ name: 'Beijing Airport' });

  const flights = [
    {
      airline: 'China Airline',
      flight_number: '0001',
      price: '1500',
      numberOfSeats: '50',
      departingAirport: fujianAirport._id,
      arrivalAirport: JFKAirport._id
 
    },
    {
        airline: 'China Eastern Airline',
        flight_number: '0002',
        price: '1200',
        numberOfSeats: '50',
        departingAirport: xiamenAirport._id,
        arrivalAirport: JFKAirport._id
      },
    
    {
        airline: 'JAL Airline',
        flight_number: '0003',
        price: '1000',
        numberOfSeats: '20',
        departingAirport: tianjingAirport._id,
        arrivalAirport: LaGuardiaAirport._id
      },
      {
        airline: 'Emirate Airline',
        flight_number: '0004',
        price: '1200',
        numberOfSeats: '50',
        departingAirport: fujianAirport._id,
        arrivalAirport: StewartAirport._id
      },
      {
        airline: 'Air China Airline',
        flight_number: '0005',
        price: '1400',
        numberOfSeats: '50',
        departingAirport: xiamenAirport._id,
        arrivalAirport: LongIslandMacArthurAirport._id
      },
      {
        airline: 'Ana Airline',
        flight_number: '0006',
        price: '1200',
        numberOfSeats: '50',
        departingAirport: fujianAirport._id,
        arrivalAirport: LongIslandMacArthurAirport._id
      },    
      {
        airline: 'Cathay Airline',
        flight_number: '0007',
        price: '2200',
        numberOfSeats: '100',
        departingAirport: beijingAirport._id,
        arrivalAirport: LongIslandMacArthurAirport._id
      }
  ];

  await Flight.insertMany(flights);
  console.log('Created flights with airports!');
};

const run = async () => {
  await main();
  db.close();
};

run();
