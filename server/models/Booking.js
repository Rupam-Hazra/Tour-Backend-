const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
    },

     user : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"Tour",
     }
})

const Booking =  mongoose.model("Booking", bookingSchema);

module.exports = Booking;