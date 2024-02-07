const db = require('./db')
const { Airport, Flight } = require('./models')

const findAirports = async () => {
    const airports = await Airport.find({}, 'name')
    console.log(airports)
}


const findFlights = async () => {
    const flights = await Flight.find({}).populate('arrival_airport').populate('departing_airport')
    console.log(flights)
}


async function main() {
    try {
       //await findAirports()
       await findFlights()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()