const db = require('./db')
const { Airport, Flight } = require('./models')


const findFlight = async ()=>{
    const flights =await Flight.find()
    console.log(flights)
     
}

const findFlightByName = async (inputAirport) => {
    const airport = await Airport.find({ name: inputAirport })
    console.log(airport)
    const flights = await Flight.find({airport_id: airport._id})

    console.log(flights)
  }

  const createFlight = async () => {
    const  airport = await Airport.findOne()
    const lhr = await Airport.find ({name:'London International Airport'})
    const las= await Airport.find({name:'North Las Vegas Airport'})
  
    let flight = await Flight.create({
        airline: 'Itzel Airlines',
        flight_number: 3243,
        price: 300,
        numberOfSeats:162,
        departingAirport:lhr[0]._id,
        arriavalAirport :las[0]._id,
        depatureDateTime: '02/04/2024 06:00'

       
    })
    console.log(flight)
  }

  const createAirport = async () => {
    const flight = await Flight.findOne()
  
    let airport = await Airport.create({

        name: 'Milan  Airport',
        location:'Milan, Italy',
        code: 'MXP'
          
       
    })
    console.log(airport)
  }
  const updateFlight = async () => {
    const updated = await Flight.updateOne({airline:'United Airlines'},
        {$inc:{ price: + 100}}
    )
    console.log(updated)
  }

  const updateAirport = async () => {
    const updated = await Airport.updateOne({name:'Doha International Airport'},
        {$rename:{ name: 'Doha Airport'}}
    )
    console.log(updated)
  }
  const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({ airline: 'American Airlines' })
    console.log(deleted)
  }

  const deleteAirport = async () => {
    let deleted = await Airport.deleteOne({ name: 'San Francisco International Airport' })
    console.log(deleted)
  }


  const sortFlightsPrice = async () => {
    const flights =await Flight.find().sort({price:-1}) // change to {price:1} to sort form highe to lower 
    console.log(flights)

  }
  const sortFlightsDate = async () => {
    const flights =await Flight.find().sort({depatureDateTime:-1}) // change to {epatureDateTime:1} to sort form sooner to latter 
    console.log(flights)

  }

//   const sortNewFlights =async ()=>{
    const flights =await Flight.find({}, { depatureDateTime: { $lt:"2024-03-01T10:03:46.000Z"} } )
    console.log(flights)
//   }

async function main() {
    try {
       //await findFlight()
      // await findFlightByName('San Francisco International Airport')
     // await createFlight()
     //await createAirport()
     //await updateFlight()
    // await updateAirport()
   //await deleteFlight()
   //await deleteAirport()
   //await sortFlightsPrice()
   //await sortFlightsDate()
   
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()