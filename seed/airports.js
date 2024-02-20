const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const models = [
    { 
      name: "Los Angeles International Airport",
      location: "Los Angeles",
      code: "LAX"
    },
    {
      name: "Beijing Capital International Airport",
      location: "Beijing",
      code: "PEK"
    },
    {
      name: "Dallas Fort Worth International Airport",
      location: "Dallas",
      code: "DFW"
    },
    {
      name: "Henada Airport",
      location: "Tokyo",
      code: "HND"
    },
    {
      name: "Dubai International Airport",
      location: "Dubai",
      code: "DXB"
    },
    {
      name: "Heathrow Airport",
      location: "London",
      code: "LHR"
    }
  ]

  await Airport.insertMany(models)
  console.log('inserted airports.')
}

const run = async () => {
  await main()
  db.close()
}

run()