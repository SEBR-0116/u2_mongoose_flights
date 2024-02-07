const db = require('./db')
const { Airport, Flight } = require('./models')

// const peason_ON = await Airport.find({  code: "XYZ" })
// const calgary_AB = await Airport.find({ code: "YYC" })
// const halifax_NS = await Airport.find({  code: "YHZ" })
// const qubec_OT = await Airport.find({ code: "YUL" })
// const Vancouver_BC = await Airport.find({ code: "YVR" })


const find_Flights = async () => {
   
   const flights = await Flight.find({})
    console.log(flights)
}
// I want to view a list of all flights and airports (index functionality) 
// that displays each flight's airline, airport, flight no., and departure
//  date/time (consider formatting the departs property).
const find_Flights_Of_One_Airport = async () => {
  const peason_ON = await Airport.find({  code: "XYZ" })
  //  const  flights_Detailes =  await Flight.find({airport_id: peason_ON[0]._id},
  //   {airline:1,flight_number:1,departing_airport:1,departing_time:1}).populate('departing_airport').populate('arrival_airport')
  const  flights_Detailes =  await Flight.find({},
    {airline:1,flight_number:1,departing_airport:1,departing_time:1,arrival_time:1}).populate('departing_airport').populate('arrival_airport')  
  console.log(flights_Detailes)
}


// I want to be able to access the details for each of these objects via the object's ID
const find_airport_by_id = async () => {
  
 // const fligth_details = await Flight.find({flight_id:'65c2c3db47a67e3d31fcd66a'},{airline:1,flight_number:1,departing_airport:1,departing_time:1,arrival_time:1})
 const fligth_details = await Flight.find({_id:"65c2c3db47a67e3d31fcd66a"},{airline:1,flight_number:1,departing_airport:1,departing_time:1,arrival_time:1})
  console.log(fligth_details)


}

// I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create

const creat_Flight = async () => {
 
  const calgary_AB = await Airport.find({ code: "YYC" })
  const Vancouver_BC = await Airport.find({ code: "YVR" })

  let create_ariline = await Flight.create(
    {
      airline : "Airbus A450",
      flight_number : "UL450",
      price : 2500,
      number_of_seats : 250,
      departing_airport : calgary_AB[0]._id,
      departing_time : new Date("2024-02-11"),
      arrival_airport : Vancouver_BC[0]._id,
      arrival_time : new Date("2024-02-13")
    }
  ) 
    console.log(create_ariline)
}

// I want to be able to update the details for my Flights and Airports
const update_Flight_Airport = async () => {

  const halifax_NS = await Airport.find({  code: "YHZ" })
  const qubec_OT = await Airport.find({ code: "YUL" })

  const  airline = await Flight.findOne({ flight_number : "UL450" })

    const update_airline_UL450 = await Flight.updateOne(
      {
        flight_number : airline.flight_number
      },
      {
          price : 1500, 
          departing_airport :qubec_OT[0]._id,
          arrival_airport:halifax_NS[0]._id
      }
    )
      console.log(update_airline_UL450)

}

// I want to be able to delete any Flight and Airport
const delete_flight = async () => {

  const  airline = await Flight.findOne({ flight_number : "UL450" })
  const delete_UL450_flight = await Flight.findOneAndDelete(
    {
      flight_number : airline.flight_number
    }
  )
    console.log(delete_UL450_flight)
}



async function main() {
    try {
        //await find_Flights()
        //await find_Flights_Of_One_Airport()
        //await find_airport_by_id()
        //await creat_Flight()
        // await update_Flight_Airport()
        await delete_flight()
    
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }

  main()