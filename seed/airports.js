const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const airports = [
        {
            airport_name: 'Bari International Airport-Karol Wojtyla',
            location: "Bari, Italy",
            code: 'BRI',
        },
        {
            airport_name: 'Miami International Airport',
            location: 'Miami, Florida, United States',
            code: 'MIA',
        },
        {
            airport_name: 'Leonardo da Vinci-Fiumicino Airport',
            location: 'Rome, Italy',
            code: 'FCO',
        },
        {
            airport_name: 'Milan Malpensa Airport',
            location: 'Milan, Italy',
            code: 'MXP',
        },
    ]

    await Airport.insertMany(airports)
    console.log('Airports logged into Database')

}

const run = async () => {
    await main()
    db.close()
}

run()