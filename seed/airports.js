const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const main = async() => {
    const airports = [
        {
            airport_name: 'John F. Kennedy International Airport',
            location: 'New York, USA',
            code: 'JFK'
        },
        {
            airport_name: 'San Francisco International Airport',
            location: 'San Francisco, USA',
            code: 'SFO'
        },
        {
            airport_name: 'RAF Northolt',
            location: 'South Ruislip, UK',
            code: 'NHT'
        },
        {
            airport_name: 'Aéroport Chambéry Savoie Mont Blanc',
            location: 'Chambéry, France',
            code: 'CMF'
        },
        {
            airport_name: 'Heathrow Airport',
            location: 'London, UK',
            code: 'LHR'
        }
    ]
    await Airport.insertMany(airports)
    console.log('inserted')
}

const run = async() => {
    await main()
    db.close()
}

run()