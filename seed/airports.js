const db = require('../db')
const Airport = require('../models/airport')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: "DFW International Airport", //0
            location: "Dallas-Fort Worth, TX",
            code: "DFW"
        },
        {
            name: "Ontario International Airport", //1
            location: "Ontario, CA",
            code: "ONT"
        },
        {
            name: "Austin-Bergstrom International Airport", //2
            location: "Austin, TX",
            code: "AUS"
        },
        {
            name: "Billings Logan International Airport", //3
            location: "Billings, Montana",
            code: "BIL"
        }
    ]

    await Airport.insertMany(airports)
    console.log("Created some airports!")
}
const run = async () => {
    await main()
    db.close()
}

run()