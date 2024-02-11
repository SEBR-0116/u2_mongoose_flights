const db = require('../db')
const{airport} = require(`../models`)
console.log(airport)

db.on(`error`,console.error.bind(console,`MongoDB connection error:`))

const main = async() =>{
    const airportinsert = [
        {
            name:"Los Angeles International Airport",
            location:"Los Angeles, California",
            code:"LAX"
        },
        {
            name:"O'Hare International Airport",
            location:"Chicago, Illinois",
            code:"ORD"
        },
        {
            name:"Hartsfield-Jackson Atlanta International Airport",
            location:"Atlanta, Georgia",
            code:"ATL"
        },
        {
            name:"John F. Kennedy International Airport",
            location:"New York City, New York",
            code:"JFK"
        }
    ]
    await airport.insertMany(airportinsert)
    console.log(`Created Aiports`)
}

const run = async() =>{
        await main()
        db.close()
    }

run()