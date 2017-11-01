var mongoose = require('mongoose');

var room = mongoose.Schema({
    name : { type : String, required : true, unique : true }
});

module.exports = mongoose.model("room", room);