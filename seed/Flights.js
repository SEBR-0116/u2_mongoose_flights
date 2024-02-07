const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const hartsfield = await Airport.find ( {name: "Hartsfield Jackson Atlanta"} )
    const kennedyNY = await Airport.find ( {name: "John F Kennedy NY"} )
    const dallas = await Airport.find ( {name: "Dallas Fort Worth"} )
    const orlando = await Airport.find ( {name: "Orlando International"} )
    

    //once we have found our Parents, we can insert our Children bc they'll have a Foreign key to reference
    const flights = [ 
    {
        airline: "Dream",
        flight_number: 340478,
        price: 450,
        numberOfSeats: 250,
        departingAirport: hartsfield[0]._id,
        arrivingAirport: kennedyNY[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Wonder",
        flight_number: 783929,
        price: 500,
        numberOfSeats: 200,
        departingAirport: kennedyNY[0]._id,
        arrivingAirport: orlando[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Paradise",
        flight_number: 83919,
        price: 440,
        numberOfSeats: 220,
        departingAirport: dallas[0]._id,
        arrivingAirport: hartsfield[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Wonder",
        flight_number: 472991,
        price: 400,
        numberOfSeats: 320,
        departingAirport: kennedyNY[0]._id,
        arrivingAirport: dallas[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Paradise",
        flight_number: 228374,
        price: 380,
        numberOfSeats: 290,
        departingAirport: hartsfield[0]._id,
        arrivingAirport: orlando[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Dream",
        flight_number: 441942,
        price: 440,
        numberOfSeats: 290,
        departingAirport: dallas[0]._id,
        arrivingAirport: kennedyNY[0]._id,
        departure_date: "2024-03-18"
    },
    {
        airline: "Paradise",
        flight_number: 778192,
        price: 550,
        numberOfSeats: 350,
        departingAirport: orlando[0]._id,
        arrivingAirport: kennedyNY[0]._id,
        departure_date: "2024-03-18"
    }
]

      await Flight.insertMany(flights)
      console.log('Created flights with airports!')
}

const run = async () => {
    await main()
    db.close()
}

run ()
