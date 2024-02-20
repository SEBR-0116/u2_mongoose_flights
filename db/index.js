// pulls in all of mongoose information from the modules we installed through node
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/flightsDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })


mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db;