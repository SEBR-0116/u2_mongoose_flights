// Write your queries here


const db = require(`./db`)
const{airport,flight} = require('./models')

async function findFlight(findObject)
{
 console.log(findObject)
  const flight1 = await flight.find(findObject)
  console.log(flight1)
 
}


async function createFlight(addObject)
{
    const flight1= await flight.insertMany(addObject)
    console.log(flight1)
}

async function updateFlight(updateObject,updateObject1)
{
    const flight1 = await flight.updateMany(updateObject,updateObject1)
    console.log(flight1)
}


async function deleteFlight(deleteObjects)
{
    const flight1 = await flight.deleteMany(deleteObjects)
    console.log(flight1) 
}

async function deleteAirport(deleteObject)
{
    const airport1 = await airport.deleteMany(deleteObject)
    console.log(airport1) 
}


async function main(){
    try{
 
        const LAX_aiport = await airport.find({name:"Los Angeles International Airport"})
        const ORD_airport = await airport.find({name:"O'Hare International Airport"})
        const ATL_airport = await airport.find({name:"Hartsfield-Jackson Atlanta International Airport"})
        const JFK_airport = await airport.find({name:"John F. Kennedy International Airport"})


        await findFlight({})

        await createFlight({
            airline:`JetBlue Airways`,
            flightNumber:808,
            price:260,
            numberofSeats:210,
            departingAirport:JFK_airport[0]._id,
            arrivalAirport:ATL_airport[0]._id,
            departureDateTime: new Date("2023-02-11T11:30:00")
        })

        await updateFlight({airline:`JetBlue Airways`},{$set:{numberofSeats:250}})

        await deleteFlight({airline:`JetBlue Airways`,airline:`American Airlines`})
        await deleteAirport({name:'John F. Kennedy International Airport'})

    }
    catch(error){
        console.log(error)
    } finally{
        await db.close()
    }
}

main()