const db = require('../db') //calling the whole folder
const { Airport } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Airports = [
        {
            name: "Hartsfield Jackson Atlanta",
            location: "Atlanta, GA",
            code: "A0808"
          },
        {
            name: "John F Kennedy NY",
            location: "Qeens, NY",
            code: "A7880"
          },
        {
            name: "Dallas Fort Worth",
            location: "Dallas, TX",
            code: "B5060"
          },
        {
            name: "Orlando International",
            location: "Orlando, FL",
            code: "F7890"
          }
    ]

    await  Airport.insertMany(Airports)
    console.log('inserted airports!')
}

const run = async() => {

    await main()
    db.close()
}

run()

