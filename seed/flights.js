const db = require('../db')
const { Airport, Flight } = require('../models')
//const Chance = require('chance')
//const chance = new Chance()
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Doha = await Airport.find({name:'Doha International Airport'})
    const JohnFK = await Airport.find({name:'John F. Kennedy International Airport'})
    const Lax = await Airport.find({name:'Los Angeles International Airport'})
    const Sfo = await Airport.find({name:'San Francisco International Airport'})
    const lga = await Airport.find({name:'LaGuardia Airport'})
    const dxb = await Airport.find({name:'Dubai International Airport'})
    const cai = await Airport.find({name:'Cairo International Airport'})
    const mex =await Airport.find({name:'Mexico City Iternational Airport'})
    const lhr = await Airport.find ({name:'London International Airport'})
    const las= await Airport.find({name:'North Las Vegas Airport'})

  const flights =[
{
  airline: 'United Airlines',
  flight_number: 3243,
  price: 300,
  numberOfSeats:162,
  departingAirport:lhr[0]._id,
  arriavalAirport :lga[0]._id,
  depatureDateTime: '02/04/2024 06:00'
 },
 {
    airline: 'Delta Airlines',
    flight_number: 32432,
    price: 800,
    numberOfSeats:169,
    departingAirport:lhr[0]._id,
    arriavalAirport :Doha[0]._id,
    depatureDateTime:'02/03/20204 14:30'
   },
   {
    airline: 'Qatar Airways',
    flight_number: '5434',
    price: 830,
    numberOfSeats:189,
    departingAirport:Lax[0]._id,
    arriavalAirport :dxb[0]._id,
    depatureDateTime:'02/04/2024 12:30'
   },
   {
   airline: 'Qatar Airways',
   flight_number: '2144',
   price: 530,
   numberOfSeats:189,
   departingAirport:dxb[0]._id,
   arriavalAirport :Sfo[0]._id,
   depatureDateTime:'02/04/2024 05:30'
  },
  {
    airline: 'Emirates',
    flight_number: '35234',
    price: 1030,
    numberOfSeats:189,
    departingAirport:Sfo[0]._id,
    arriavalAirport :dxb[0]._id,
    depatureDateTime:'02/05/2024 05:30'
   }, 
   {
    airline: 'American Airlines',
    flight_number: '355435',
    price: 430,
    numberOfSeats:169,
    departingAirport:Sfo[0]._id,
    arriavalAirport :lga[0]._id,
    depatureDateTime:'02/05/2024 14:30'
   },
   {
    airline: 'American Airlines',
    flight_number: '645235',
    price: 530,
    numberOfSeats:169,
    departingAirport:Lax[0]._id,
    arriavalAirport :JohnFK[0]._id,
    depatureDateTime:'02/06/2024 18:30'
   },
   {
    airline: 'United Airlines',
    flight_number: '634235',
    price: 530,
    numberOfSeats:169,
    departingAirport:lga[0]._id,
    arriavalAirport :Lax[0]._id,
    depatureDateTime:'02/07/2024 08:30'
   },
   {
    airline: 'United Airlines',
    flight_number: '633435',
    price: 650,
    numberOfSeats:169,
    departingAirport:lga[0]._id,
    arriavalAirport :Lax[0]._id,
    depatureDateTime:'02/07/2024 08:30'
   },
   {
    airline: 'United Airlines',
    flight_number: '6656',
    price: 650,
    numberOfSeats:169,
    departingAirport:Lax[0]._id,
    arriavalAirport :JohnFK[0]._id,
    depatureDateTime:'02/08/2024 14:30'
   },
   {
    airline: 'American Airlines',
    flight_number: '6456',
    price: 350,
    numberOfSeats:169,
    departingAirport:JohnFK[0]._id,
    arriavalAirport :Lax[0]._id,
    depatureDateTime:'02/17/2024 14:30'
   },
   {
    airline: 'American Airlines',
    flight_number: '60986',
    price: 650,
    numberOfSeats:189,
    departingAirport:JohnFK[0]._id,
    arriavalAirport :Sfo[0]._id,
    depatureDateTime:'02/27/2024 16:30'
   }

  ]


  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}


const run = async () => {
  await main()
  db.close()
}

run()  