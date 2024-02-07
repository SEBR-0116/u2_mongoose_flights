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

const find_Flights_Of_One_Airport = async () => {
  const peason_ON = await Airport.find({  code: "XYZ" })
  //  const  flights_Detailes =  await Flight.find({airport_id: peason_ON[0]._id},
  //   {airline:1,flight_number:1,departing_airport:1,departing_time:1}).populate('departing_airport').populate('arrival_airport')
  const  flights_Detailes =  await Flight.find({},
    {airline:1,flight_number:1,departing_airport:1,departing_time:1,arrival_time:1}).populate('departing_airport').populate('arrival_airport')  
  console.log(flights_Detailes)
}

async function main() {
    try {
        //await find_Flights()
        await find_Flights_Of_One_Airport()
    
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }

  main()