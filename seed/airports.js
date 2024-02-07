
//pulling in our db module, and the deconstructed object of Publisher, with all of its information
const db = require('../db')
const { Airport } = require('../models')


//attaching to the db, and giving us an error if anything goes wrong
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions. That way, even if it only takes .01 of second, it still won't throw things out of order
const main = async () => {
  const airports = [
    {
      name: 'LaGuardia Airport',
      location: 'New York',
      code: 'LGA',
      type: 'arrival'
    },
    {
      name: 'JFK Airport',
      location: 'New York',
      code: 'JFK',
      type: 'arrival'
    },
    {
      name: 'Stewart Airport',
      location: 'New York',
      code: 'SWF',
      type: 'arrival'
    },
    {
      name: 'Long Island MacArthur Airport',
      location: 'New York',
      code: 'LSP',
      type: 'arrival'
    },
    {
      name: 'Beijing Airport',
      location: 'Beijing',
      code: 'BJ',
      type: 'departure'
    },
    {
      name: 'Fujian Airport',
      location: 'Fujian',
      code: 'FJ',
      type: 'departure'
    },
    {
      name: 'Xiamen Airport',
      location: 'Xiamen',
      code: 'XM',
      type: 'departure'
    },
    {
      name: 'Tianjing Airport',
      location:'Tianjing',
      code: 'TJ',
      type: 'departure'
    }
  ];

  await Airport.insertMany(airports);
  console.log('Created airports!');
};

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task. 
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
//runs our main function and awaits for the data to populate
  await main()
  //closes our db after its run so things don't break
  db.close()
}

run()