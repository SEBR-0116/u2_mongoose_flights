const db = require('../db')
const {Airports} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
{
  airport_name : 'George Bush Intercontinental Airport',
  location : 'Houston, TX',
  code : 'IAH',
  },
  {
  airport_name : 'Orlando International Airport',
  location : 'Orlando, FL',
  code : 'MCO',
  },
  {
  airport_name : 'San Diego International Airport',
  location : 'San Diego, CA',
  code : 'SAN',
  },
  {
  airport_name : 'Dublin Airport',
  location : 'Dublin, Ireland',
  code : 'DUB',
  },
  ]
 await Airports.insertMany(airports)
 console.log('Flying in! Flying out!')
}

const run = async () => {
  
    await main()
    
    db.close()
  }

  run()