const {Schema} = require('mongoose')

const Flight = new Schema (
    {
        airline : {type:String,required:true},
        flight_number : {type:String,required:true},
        price : {type:Number,required:false},
        number_of_seats : {type:Number,required:false},
        departing_airport : {type:Schema.Types.ObjectId, ref:'Airport'},
        departing_time : { type: Date, default: Date.now },
        arrival_airport : {type:Schema.Types.ObjectId, ref:'Airport'},
        arrival_time : { type: Date, default: Date.now }
    },
    {
        timestamps:true
    })

    module.exports = Flight






    