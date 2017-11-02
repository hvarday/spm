var	userModel = require('../models/user'),
	Promise = require('bluebird');

function generate(){
	
	userModel.find().sort({ cgpa : -1, name : 1 })
	.then((data)=>{
console.log(data);
		var promiseArray = [];

		data.forEach((e, i)=>{
			data[i].rank = i+1;
			delete data[i].password;
			promiseArray.push(userModel.update({ _id : e._id }, { $set : { rank : i+1 } }));
		});
		return Promise.all(promiseArray);
	})
	.then(()=>{
		console.log("rank generated");
	})

}

module.exports = generate;