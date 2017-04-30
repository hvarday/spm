var user = require('../models/user'),
    mongoose = require('mongoose');
    require('dotenv').config("../");
    mongoose.connect(process.env.MONGO_URI);


var temp = {
    username : "hv",
    password : "password",
    priority : 5
}

function gen(){
    console.log("working");
    try{
        
        new user(temp)
            .save()
            .then(function(doc){
                console.log('some doc')
                console.log(JSON.stringify(doc));
                mongoose.disconnect();
            })
            .catch(function(err){
                console.log("Some Error");
                console.log(err);
                mongoose.disconnect();
            })
    }catch(err){
        console.log("catch", err);
    }

}

gen();

// module.exports = gen;