const db = require('../db')
const { Airport, Flight } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const peason_ON = await Airport.find({  code: "XYZ" })
    const calgary_AB = await Airport.find({ code: "YYC" })
    const halifax_NS = await Airport.find({  code: "YHZ" })
    const qubec_OT = await Airport.find({ code: "YUL" })
    const Vancouver_BC = await Airport.find({ code: "YVR" })
    
    const Flights = [

        {
            airline : "Airbus A330",
            flight_number : "UL501",
            price : 1500,
            number_of_seats : 150,
            departing_airport : peason_ON[0]._id,
            departing_time : new Date("2024-06-10"),
            arrival_airport : halifax_NS[0]._id,
            arrival_time : new Date("2024-06-11")
        },
        {
            airline : "Boeing A737",
            flight_number : "BL701",
            price : 2500,
            number_of_seats : 250,
            departing_airport : peason_ON[0]._id,
            departing_time : new Date("2024-08-18"),
            arrival_airport : calgary_AB[0]._id,
            arrival_time : new Date("2024-08-19")
        },
        {
            airline : "Boeing 777",
            flight_number : "BL121",
            price : 1850,
            number_of_seats : 120,
            departing_airport : Vancouver_BC[0]._id,
            departing_time :new Date("2024-05-11"),
            arrival_airport : halifax_NS[0]._id,
            arrival_time : new Date("2024-05-12")
        },
        {
            airline : "Airbus A330",
            flight_number : "UL581",
            price : 2850,
            number_of_seats : 150,
            departing_airport : qubec_OT[0]._id,
            departing_time : new Date("2024-10-05"),
            arrival_airport : halifax_NS[0]._id,
            arrival_time : new Date("2024-10-06")
        },
        {
            airline : "Airbus A380",
            flight_number : "UL551",
            price : 1250,
            number_of_seats : 130,
            departing_airport : peason_ON[0]._id,
            departing_time : new Date("2024-06-02"),
            arrival_airport : halifax_NS[0]._id,
            arrival_time : new Date("2024-06-03")
        },
        {
            airline : "Airbus A330",
            flight_number : "UL501",
            price : 1550,
            number_of_seats : 150,
            departing_airport : Vancouver_BC[0]._id,
            departing_time : new Date("2024-07-04"),
            arrival_airport : halifax_NS[0]._id,
            arrival_time : new Date("2024-07-05")
        },
        {
            airline : "Airbus A380",
            flight_number : "UL551",
            price : 1250,
            number_of_seats : 130,
            departing_airport : halifax_NS[0]._id,
            departing_time : new Date("2024-04-04"),
            arrival_airport : calgary_AB[0]._id,
            arrival_time : new Date("2024-04-05")
        }
    ]

    await Flight.insertMany(Flights)
    console.log("Flight are Sheduled!")

}

const run = async () => {
    await main()
    db.close()
  }
  
  run()