const db = require('./db')
const { Airport, Flight } = require('./models')


//find aiports and flights
const findAirports = async () => {
    const airports = await Airport.find({}, 'name')
    console.log(airports)
}


const findFlights = async () => {
    const flights = await Flight.find({}).populate('arrival_airport').populate('departing_airport')
    console.log(flights)
}


//access details via ObjectID
const findFlight = async () => {
    const objectID = '65c2c2b7d7627b97b6748b45';
    const flight = await Flight.findById(objectID).populate('arrival_airport').populate('departing_airport')
    console.log(flight)
}


//create flight
const createFlight = async () => {
    const airport = await Airport.findOne()
    const chicago = await Airport.find({ name: "O'Hare International Airport"})
    const dallas = await Airport.find({ name: "Dallas Fort Worth International Airport"})

    let flight = await Flight.create({
        airline: 'American Airlines',
        flight_number: 'AA680',
        price: 210,
        number_of_seats: 165,
        departing_airport: dallas[0]._id,
        arrival_airport: chicago[0]._id,
        departure_date_time: "2024-02-07T10:50:00"
    })
    console.log(flight)
  }


//Update flight or airport
const updateFlight = async () => {
    const updated = await Flight.updateOne(
        { flight_number: 'UA830' },
        { flight_number: 'UA831' }
    )
    console.log(updated)
  }


//delete flight or airport
const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({ flight_number: 'UA530' })
    console.log(deleted)
  }



async function main() {
    try {
       //await findAirports()
       await findFlights()
       //await findFlight()
       //await createFlight()
       //await updateFlight()
       //await deleteFlight()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()