var mongoose = require('mongoose');

var temp = mongoose.Schema({

    room : { type : String, required : true, lowercase : true },
    building : { type : String, required : true, uppercase : true },
    capacity : { type : Number, required : true, default : 60 }
    
})

temp.index({ room : 1, building : 1 }, { unique : true })

module.exports = mongoose.model('class', temp);