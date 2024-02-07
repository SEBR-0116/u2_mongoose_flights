const db = require('../db')
const { Airport, Flight } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async() => {
    const Airports = [
        {
            name : "Peason International Airport",
            location: "Toronto,ON",
            code: "XYZ"
        },
        {
            name : "Calgary International Airport",
            location: "Calgary,AB",
            code: "YYC"
        },
        {
            name : "Halifax Stanfield International Airport",
            location: "Halifax,NS",
            code: "YHZ"
        },
        {
            name : "Montréal–Trudeau International Airport",
            location: "Montreal,OT",
            code: "YUL"
        },{
            name : "Vancouver International Airport",
            location: "Vancouver,BC",
            code: "YVR"
        }
    ]

    await Airport.insertMany(Airports)
    console.log("Airports Created!")
}

const run = async () => {
    await main()
    db.close()
}
run()