var mongoose = require('mongoose');

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

    room : { type : String, required : true, lowercase : true },
    building : { type : String, required : true },
    capacity : { type : Number, required : true, default : 60 },
    schedule : { type : schedule, required : true }

})

module.exports = mongoose.model('class', temp);