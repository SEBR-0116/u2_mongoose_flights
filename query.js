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
      departing_time : new Date("2024-02-1"),
      arrival_airport : Vancouver_BC[0]._id,
      arrival_time : new Date("2024-02-2")
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

//Bonuses
//I want to view the list of flights by departure date in ascending order.

const view_flight_ascending = async () => {
  const  sort_airline = await Flight.find({ }).sort({departing_time:"desc"})
  console.log(sort_airline)
}


//I want the flights in the list to not be displayed if the flight's departure date and time have passed.
const view_upcomming_flights = async () => {
  const  sort_airline = await Flight.find({departing_time:{$gt:Date.now()} })
  console.log(sort_airline)
}

// I want to see all flights from California to New York by descending price 
// (hint - you may need to create a number of Flight objects that meet this requirement.
//   You can use JFK and LGA for New York airports, and LAX and SFO for California's)

const create_Airport = async () => {

  //Air port Added
  let create_airports = [
    {
      name : "California",
      location: "Toronto,ON",
      code: "LAX"
  },
  {
    name : "California",
    location: "Toronto,ON",
    code: "SFO"
  },
  {
      name : "New York",
      location: "Calgary,AB",
      code: "JFK"
  },
  {
      name : "New York",
      location: "Calgary,AB",
      code: "LGA"
  }]
  await Airport.insertMany(create_airports)
  console.log('Flight')
}

const filter_cal_ny_flight = async () => {

//Flights added
  const california_LAX = await Airport.find({ code: "LAX" })
  const california_SFO = await Airport.find({  code: "SFO" })
  const new_york_JFK = await Airport.find({ code: "JFK" })
  const new_york_LGA = await Airport.find({ code: "LGA" }) 
 
 
  const Flights = [

    {
        airline : "Airbus A900",
        flight_number : "US555",
        price : 1500,
        number_of_seats : 350,
        departing_airport : california_LAX._id,
        departing_time : new Date("2024-03-10"),
        arrival_airport : new_york_JFK._id,
        arrival_time : new Date("2024-03-11")
    },
    {
        airline : "Boeing A898",
        flight_number : "US901",
        price : 1500,
        number_of_seats : 250,
        departing_airport : california_SFO._id,
        departing_time : new Date("2024-04-18"),
        arrival_airport : new_york_LGA._id,
        arrival_time : new Date("2024-04-19")
    },
    {
        airline : "Boeing 777",
        flight_number : "US222",
        price : 1050,
        number_of_seats : 150,
        departing_airport :california_LAX._id,
        departing_time :new Date("2024-05-11"),
        arrival_airport : new_york_LGA._id,
        arrival_time : new Date("2024-05-12")
    },
    {
        airline : "Airbus A330",
        flight_number : "US581",
        price : 2850,
        number_of_seats : 150,
        departing_airport : california_SFO._id,
        departing_time : new Date("2024-10-05"),
        arrival_airport : new_york_JFK._id,
        arrival_time : new Date("2024-10-06")
    },
    {
        airline : "Airbus A380",
        flight_number : "US551",
        price : 1250,
        number_of_seats : 130,
        departing_airport : california_LAX._id,
        departing_time : new Date("2024-06-02"),
        arrival_airport : new_york_JFK._id,
        arrival_time : new Date("2024-06-03")
    },
    {
        airline : "Airbus A330",
        flight_number : "US501",
        price : 1550,
        number_of_seats : 150,
        departing_airport : california_SFO._id,
        departing_time : new Date("2024-07-04"),
        arrival_airport : new_york_LGA._id,
        arrival_time : new Date("2024-07-05")
    },
    {
        airline : "Airbus A380",
        flight_number : "US551",
        price : 1250,
        number_of_seats : 130,
        departing_airport : california_SFO._id,
        departing_time : new Date("2024-04-04"),
        arrival_airport : new_york_JFK._id,
        arrival_time : new Date("2024-04-05")
    }
]

await Flight.insertMany(Flights)
console.log("Flight are Sheduled!")

//Query

}

const delete_existing = async () => {
  //const  airline = await Airport.find({ name : "California"})
  const delete_airports = await Airport.deleteMany(
    {
      name : "California"
    }
  )
    console.log(delete_airports)
}
const BonusQuery =  async () => {

  const california_LAX = await Airport.find({ code: "LAX" })
  console.log(" Cali ", california_LAX)
  const california_SFO = await Airport.find({  code: "SFO" })
  const new_york_JFK = await Airport.find({ code: "JFK" })
  const new_york_LGA = await Airport.find({ code: "LGA" }) 

  //console.log(`Cali -  ${california_LAX}`)
  const cal_new_flights = await Flight.find(
    {
      // departing_airport:"65c40528dbc2d3c25c0aead5",
      // arrival_airport:"65c40528dbc2d3c25c0aead6",
      // departing_time:{$gt:Date.now()}
      departing_airport:california_LAX[0]._id,
      arrival_airport:new_york_JFK[0]._id,
      departing_time:{$gt:Date.now()}
      })
      console.log(cal_new_flights)
}


async function main() {
    try {
        //await find_Flights()
        //await find_Flights_Of_One_Airport()
        //await find_airport_by_id()
        //await creat_Flight()
        // await update_Flight_Airport()
        //await delete_flight()
        //await view_flight_ascending()
        //await view_upcomming_flights()
        
        //await create_Airport()
        //await filter_cal_ny_flight()
        //await delete_existing()
        await BonusQuery()

    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }

  main()