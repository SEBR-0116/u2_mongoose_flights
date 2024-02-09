const db = require('../flightDatabase')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   
    const flights = [ 
        {
            airline: "American Airlines",
            flightNumber: 2356,
            price: 1890,
            numberOfSeats: 236,
            departingAirport: "LAX",
            arrivalAirport: "JFK",
            departureDate: Date.UTC(2024, 3, 31)
            },
        {
            airline: "American Airlines",
            flightNumber: 5678,
            price: 1908,
            numberOfSeats: 306,
            departingAirport: "JFK",
            arrivalAirport: "LAX",
            departureDate: Date.UTC(2024, 4, 29)
            },
        {
            airline: "Delta",
            flightNumber: 9856,
            price: 605,
            numberOfSeats: 280,
            departingAirport: "TPA",
            arrivalAirport: "MSY",
            departureDate: Date.UTC(2024, 11, 20)
        },
    {
        airline: "Delta",
        flightNumber: 3477,
        price: 707,
        numberOfSeats: 345,
        departingAirport: "MSY",
        arrivalAirport: "TPA",
        departureDate: Date.UTC(2024, 12, 17)
            },
    {
                airline: "United",
                flightNumber: 609,
                price: 2200,
                numberOfSeats: 246,
                departingAirport: "JFK",
                arrivalAirport: "TPA",
                departureDate: Date.UTC(2024, 4, 23)
                },
                {
                    airline: "United",
                    flightNumber: 899,
                    price: 2500,
                    numberOfSeats: 380,
                    departingAirport: "MSY",
                    arrivalAirport: "LAX",
                    departureDate: Date.UTC(2024, 6, 15)
                    },
                    {
                        airline: "Delta",
                        flightNumber: 9230,
                        price: 1500,
                        numberOfSeats: 290,
                        departingAirport: "LAX",
                        arrivalAirport: "TPA",
                        departureDate: Date.UTC(2024, 7, 20)
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
    