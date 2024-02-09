const db = require('../flightDatabase')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [ 
        { 
        name: "Los Angeles International Airport",
        location: "Los Angeles, CA",
        code: "LAX",
    },
    { 
        name: "Tampa Internaitonal Airport",
        location: "Tampa, FL",
        code: "TPA",
    },
    { 
        name: "Louis Armstrong New Orleans International Airport",
        location: "New Orleans, LA",
        code: "MSY",
    },
    { 
        name: "John F Kennedy Interantional Airport",
        location: "New York, NY",
        code: "JFK",
    }]

    await Airport.insertMany(airports)
    console.log('inserted airports!')
}

const run = async () => {
    await main()
    db.close()
}

run()