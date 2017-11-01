var mongoose = require('mongoose');

var registration = mongoose.Schema({
	reg1 : { type : String, required : true, unique : true },
	reg2 : { type : String, required : true, unique : true },
	reg3 : { type : String, required : true, unique : true },
	room : { type : mongoose.Schema.Types.ObjectId, required : true, unique : true, ref:'room' }
},{
	timestamps : true
});

module.exports = mongoose.model('registration', registration)