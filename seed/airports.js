
const db = require('../db')
const { Airport } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
    name: 'Doha International Airport',
    location:'DOHA, QATAR',
    code: 'DAI',

    },
    {
    name: 'John F. Kennedy International Airport',
    location:'Queens, New York',
    code: 'JFK',
    
     },
    {
     name: 'Los Angeles International Airport',
    location:'Los Angeles, CA ',
    code: 'LAX',
        
    },
    {
     name: 'San Francisco International Airport',
    location:'San Francisco, CA ',
    code: 'SFO',
            
    },
    {
        name: 'LaGuardia Airport',
       location:'Queens, NY ',
       code: 'LGA',
               
       },

       {
        name: 'Dubai International Airport',
       location:'Dubai, UAE ',
       code: 'DXB',
               
       },
       {
        name: 'Cairo International Airport',
       location:'Cairo, Egypt ',
       code: 'CAI',
               
       },
       {
        name: 'Mexico City Iternational Airport',
       location:'Mexico,CDMX ',
       code: 'MEX',
               
       },
       {
        name: 'London International Airport',
       location:'London, UK ',
       code: 'LHR',
               
       },
       {
        name: 'North Las Vegas Airport',
       location:'Las Vegas, NV  ',
       code: 'LAS',
               
       },

    

  ]
 

  await Airport.insertMany(airports)
 
  console.log('Created  airports!')
}

const run = async () => {

  await main()
 
  db.close()
}

run()