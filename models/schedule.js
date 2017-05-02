var mongoose = require('mongoose');

var booking = mongoose.Schema({
    user : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'user' },
    slot : { type : String, required : true },
    purpose : { type : String, required : true, default : "Meeting" }
})

var schedule = mongoose.Schema({

    '8 - 9' : { type : String, required : true },
    '9 - 10' : { type : String, required : true },
    '10 - 11' : { type : String, required : true },
    '11 - 12' : { type : String, required : true },
    '12 - 13' : { type : String, required : true },
    '13 - 14' : { type : String, required : true },
    '14 - 15' : { type : String, required : true },
    '15 - 16' : { type : String, required : true },
    '16 - 17' : { type : String, required : true },
    '17 - 18' : { type : String, required : true },
    '18 - 19' : { type : String, required : true }

})

var temp = mongoose.Schema({

    class : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'class' },
    schedule : { type : schedule, required : true },
    date : { type : Date, required : true },
    bookings : [ booking ]

})

temp.index({ class : 1, date : 1 }, { unique : true });
booking.index({ user : 1, slot : 1 }, { unique : true });

module.exports = mongoose.model('schedule', temp);