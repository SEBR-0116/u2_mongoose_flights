
const db = require('../db')
const { Airport } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const airports = [
    {
      name: 'John F. Kennedy International Airport',
      location: 'New York City, NY USA',
      code: 'JFK'
    },
    {
      name: 'Los Angeles International Airport',
      location: 'Los Angeles, CA USA',
      code: 'LAX'
    },
    {
      name: 'Baltimore Washington International Airport',
      location: 'Baltimore, MD USA',
      code: 'BWI'
      },
    {
      name: 'Washington Dulles International Airport',
      location: 'Dulles, VA USA',
      code: 'IAD'
    },
    
  ]
 

  await Airport.insertMany(airports)
 
  console.log('Created airports!')
}


const run = async () => {

  await main()

  db.close()
}

run()