const db = require('../db')
const { Airport, Flight} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const JFK = await Airport.find({airport_name: 'John F. Kennedy International Airport'})
    const SFO = await Airport.find({airport_name: 'San Francisco International Airport'})
    const LHR = await Airport.find({airport_name: 'Heathrow Airport'})
    const NHT = await Airport.find({airport_name: 'RAF Northolt'})
    const CMF = await Airport.find({airport_name: 'Aéroport Chambéry Savoie Mont Blanc'})

    const flights = [
        {
            airline: 'NetJets',
            flight_no: 'EJA110',
            price: 50000,
            no_of_seats: 8,
            departure_airport: JFK[0]._id,
            arrival_airport: NHT[0]._id,
            departure_time: new Date('February 7, 2024 06:02:00')
        },
        {
            airline: 'Delta',
            flight_no: 'DL7779',
            price: 800,
            no_of_seats: 400,
            departure_airport: SFO[0]._id,
            arrival_airport: JFK[0]._id,
            departure_time: new Date('February 7, 2024 13:24:00')
        },
        {
            airline: 'JetBlue',
            flight_no: 'JBU100',
            price: 600,
            no_of_seats: 416,
            departure_airport: SFO[0]._id,
            arrival_airport: JFK[0]._id,
            departure_time: new Date('February 7, 2024 07:11:00')
        },
        {
            airline: 'British Airways',
            flight_no: 'BA0117',
            price: 1500,
            no_of_seats: 580,
            departure_airport: JFK[0]._id,
            arrival_airport: LHR[0]._id,
            departure_time: new Date('February 7, 2024 21:42:00')
        },
        {
            airline: 'NetJets',
            flight_no: 'EJA202',
            price: 25000,
            no_of_seats: 6,
            departure_airport: NHT[0]._id,
            arrival_airport: CMF[0]._id,
            departure_time: new Date('February 8, 2024 14:44:00')
        },
        {
            airline: 'British Airways',
            flight_no: 'BA0221',
            price: 3000,
            no_of_seats: 550,
            departure_airport: LHR[0]._id,
            arrival_airport: SFO[0]._id,
            departure_time: new Date('February 8, 2024 19:08:00')
        },
        {
            airline: 'Virgin Atlantic',
            flight_no: 'VIR140',
            price: 1400,
            no_of_seats: 490,
            departure_airport: LHR[0]._id,
            arrival_airport: JFK[0]._id,
            departure_time: new Date('February 9, 2024 09:33:00')
        }
    ]

    await Flight.insertMany(flights)
    console.log('inserted')
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()