const db = require(`../db`)
const{airport,flight} = require('../models')

db.on(`error`,console.error.bind(console,`MongoDB connection error:`))

const main = async() => {
    const LAX_aiport = await airport.find({name:"Los Angeles International Airport"})
    const ORD_airport = await airport.find({name:"O'Hare International Airport"})
    const ATL_airport = await airport.find({name:"Hartsfield-Jackson Atlanta International Airport"})
    const JFK_airport = await airport.find({name:"John F. Kennedy International Airport"})

    const flightsinsert = [
        {
            airline:"Delta Airlines",
            flightNumber:101,
            price:250,
            numberofSeats:200,
            departingAirport:ATL_airport[0]._id,
            arrivalAirport:LAX_aiport[0]._id,
            departureDateTime: new Date("2024-02-10T08:00:00")
        },
        {
            airline:"United Airlines",
            flightNumber:202,
            price:300,
            numberofSeats:180,
            departingAirport:LAX_aiport[0]._id,
            arrivalAirport:ORD_airport[0]._id,
            departureDateTime: new Date("2024-01-16T14:00:00")
        },
        {
            airline:"American Airlines",
            flightNumber:303,
            price:280,
            numberofSeats:200,
            departingAirport:ORD_airport[0]._id,
            arrivalAirport:JFK_airport[0]._id,
            departureDateTime: new Date("2023-12-16T16:00:00")
        },
        {
            airline:"Southwest Airlines",
            flightNumber:404,
            price:200,
            numberofSeats:150,
            departingAirport:JFK_airport[0]._id,
            arrivalAirport:ATL_airport[0]._id,
            departureDateTime: new Date("2023-10-11T06:00:00")
        },
        {
            airline:"Delta Airlines",
            flightNumber:505,
            price:270,
            numberofSeats:190,
            departingAirport:LAX_aiport[0]._id,
            arrivalAirport:JFK_airport[0]._id,
            departureDateTime: new Date("2023-11-11T09:00:00")
        },
        {
            airline:"United Airlines",
            flightNumber:606,
            price:320,
            numberofSeats:200,
            departingAirport:ATL_airport[0]._id,
            arrivalAirport:ORD_airport[0]._id,
            departureDateTime: new Date("2024-01-24T08:30:00")
        },
        {
            airline:"American Airlines",
            flightNumber:707,
            price:290,
            numberofSeats:210,
            departingAirport:ORD_airport[0]._id,
            arrivalAirport:LAX_aiport[0]._id,
            departureDateTime: new Date("2024-01-14T10:33:00")
        },
    ]
    await flight.insertMany(flightsinsert)
    console.log(`Created flights with airports`)
}

const run = async () => {
    await main()
    db.close()
}

run()