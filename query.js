const db = require('./db')
const { Airport, Flight } = require('./models')

const findAirports = async () => {
    const airports = await Airport.find({}, 'name')
    console.log(airports)
}


async function main() {
    try {
       await findAirports()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()