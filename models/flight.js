const{Schema} = require(`mongoose`)

const flight = new Schema(
    {
        airline:{type:String,required:true},
        flightNumber:{type:Number,required:true},
        price:{type:Number,required:true},
        numberofSeats:{type:Number,required:true},
        departingAirport:{type:Schema.Types.ObjectId,ref:`airportModel_id`},
        arrivalAirport:{type:Schema.Types.ObjectId,ref:`airportModel_id`},
        departureDateTime: { type: Date, required: true }
        //need to work on date and time
    },
    {
        timestamps:true
    }

)

module.exports = flight