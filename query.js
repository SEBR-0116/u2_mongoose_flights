const db = require('./db')
const { Flight, Airport } = require('./models')


const findAllFlights = async () => {
        const allFlights = await Flight.find()
        console.log(allFlights)
}

const updateFlight = async () => {
    const updatedFlight = await Flight.updateOne(
        { airline: 'Dunder Mifflin' },
        { flightNumber: '987' }
    )
    console.log(updatedFlight)
}

const findAllAirports = async () => {
    const allAirports = await Airport.find()
    console.log(allAirports)
}

const deleteFlight = async () => {
    const deletedFlight = await Flight.findOneAndDelete(
        {flightNumber: "777"}
    )
}

async function main() {
    try {
        await findAllFlights()
        await  updateFlight()
        await findAllAirports()
        await deleteFlight()

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()
