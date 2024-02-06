const db = require('../db')
const { Airport } = require('..models')

db.on('error', console.error.bind(condole, 'Mongo connection error!'))

const main = async () => {
    const airports = [
        {
            name: 'San Francisco International Airport',
            location: 'San Mateo County, CA',
            code: 'SFO'
        },
        {
            name: "O'Hare International Airport",
            location: 'Chicago, IL',
            code: 'ORD'
        },
        {
            name: "Dallas Fort Worth International Airport",
            location: 'Dallas, TX',
            code: 'DFW'
        },
        {
            name: "Hartsfield-Jackson Atlanta International Airport",
            location: 'Atlanta, GA',
            code: 'ATL'
        }
    ]
    await Airport.insertMany(airports)
    console.log('inserted airports')
}
const run = async () => {
    await main()
    db.close()
}
run()