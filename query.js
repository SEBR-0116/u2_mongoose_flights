const { ObjectId } = require('bson')
const db = require('./db')
const { Airport, Flight } = require('./models')

const deleteFlights = async () => {
    await Flight.deleteMany({})
    console.log('Flights successfully deleted!')
}

const displayFlights = async () => {
    const airports = await Airport.find({}, {_id: 1, airport_name: 1})
    const flights = await Flight.find({}, {airline: 1, flight_number: 1, departing_airport: 1, departure_date: 1, arrival_airport: 1 }).populate(['departing_airport','arrival_airport'])

    // console.log(airports)
    console.log(flights)
}

const getFlightById = async (id) => {
    const flight = await Flight.findById(id)
    console.log(flight)
}

const createFlight = async (flight) => {
    console.log(flight)
    await Flight.insertMany(flight)
    console.log('Flight Inserted')
}

const updateInfo = async (model, whereToUpdate, updatedContent) => {
    await model.updateMany(whereToUpdate, updatedContent)
    console.log('Content successfully updated')
}

const deleteInfo = async (model, whereToDelete) => {
    await model.deleteMany(whereToDelete)
    console.log('Content successfully deleted')
}

const main = async () => {
    try {
        //await displayFlights()
        //await deleteFlights()
        //await getFlightById('65c40fac1108daa61d72b456')
        // await createFlight(
        //     {
        //         airline: 'Delta', 
        //         flight_number: 'DD1029', 
        //         price: 800, 
        //         number_of_seats: 400, 
        //         departing_airport: new ObjectId('65c2bf135552326aef25a641'), 
        //         arrival_airport: new ObjectId('65c2bf135552326aef25a642'),
        //         departure_date: Date.UTC(2023,6,23,21,20)
        //     }
        // )
        //await updateInfo(Flight, {airline: 'Delta'}, {airline: "Delta Air"})
        await deleteInfo(Flight, {airline: 'Delta Air'})
    } catch (e) {
        console.error(e)
    } finally {
        db.close()
    }
}

main()