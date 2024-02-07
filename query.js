const db = require('./db')
const { Airport, Flight } = require('./models')

const list = async() => {
    const flights = await Flight.find({}, {airline: 1, flight_no: 1, departure_airport: 1, arrival_airport: 1, departure_time: 1}).populate('departure_airport').populate('arrival_airport')
    console.log(flights)
}

const findById = async(ObjectId) => {
    const flight = await Flight.findById(ObjectId)
    console.log(flight)
}

const createFlight = async(airline, flight, price, seats, departing, arriving, time) => {
    const departingAirport = await Airport.findOne({airport_name: departing}, {_id: 1})
    const arrivingAirport = await Airport.findOne({airport_name: arriving}, {_id: 1})

    let newFlight = await Flight.create({
        airline: airline,
        flight_no: flight,
        price: price,
        no_of_seats: seats,
        departure_airport: departingAirport,
        arrival_airport: arrivingAirport,
        departure_time: new Date(time)
    })
    console.log(newFlight)
}

const updateFlights = async(flightNo, airline, newFlightNo, price, seats, departing, arriving, time) => {
    const departingAirport = await Airport.findOne({airport_name: departing}, {_id: 1})
    const arrivingAirport = await Airport.findOne({airport_name: arriving}, {_id: 1})

    const flight = await Flight.updateOne({flight_no: flightNo}, {
        airline: airline,
        flight_no: newFlightNo,
        price: price,
        no_of_seats: seats,
        departure_airport: departingAirport,
        arrival_airport: arrivingAirport,
        departure_time: new Date(time)
    })

    console.log(flight)
}

const updateAirport = async(airport, newName, location, code) => {
    const newAirport = await Airport.updateOne({airport_name: airport}, {
        airport_name: newName,
        location: location,
        code: code
    })
    console.log(newAirport)
}

const deleteFlight = async(flight) => {
    const deleted = await Flight.deleteOne({flight_no: flight})
    console.log(deleted)
}

const deleteAirport = async(airport) => {
    const deleted = await Airport.deleteOne({airport_name: airport})
    console.log(deleted)
}

const ascendingDeparture = async() => {
    const flights = await Flight.find({}, {airline: 1, flight_no: 1, departure_airport: 1, arrival_airport: 1, departure_time: 1}).sort({departure_time: 1}).populate('departure_airport').populate('arrival_airport')
    console.log(flights)
}

const futureFlights = async() => {
    const flights = await Flight.find({departure_time: {$gte: Date.now()}})
    console.log(flights)
}

const calToNy = async() => {
    const JFK = await Airport.find({code: 'JFK'}, {_id: 1})
    const SFO = await Airport.find({code: 'SFO'}, {_id: 1})
    const flights = await Flight.find({$and: [{departure_airport: SFO}, {arrival_airport: JFK}]}).sort({price: 'desc'})
    console.log(flights)
}

async function main() {
    try{
        // await list()
        // await findById('65c2d66846f4e59dfccbb49d')
        // await createFlight()
        // await updateFlights()
        // await updateAirport()
        // await deleteFlight()
        // await deleteAirport()
        // await ascendingDeparture()
        // await futureFlights()
        // await calToNy()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()