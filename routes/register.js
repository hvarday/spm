var router = require('express').Router(),
	registrationModel = require('../models/registration'),
	userModel = require('../models/user'),
	roomModel = require('../models/room');

router.use((req, res, next)=>{

    if(req.user)
        return next();
    else
        res.redirect('/login');

})

router.route('/')
.get((req, res, next)=>{
	console.log(req.user);
	res.render('register');
})
.post((req, res, next)=>{
	
	var data = req.body,
		registrationNumbers = [data.reg1, data.reg2, data.reg3];
	
	registrationModel.count({ username : { $in : registrationNumbers }, status : true })
	.then((count)=>{
		if(count>0)
			res.status(409).send("Already registered");
		else
			return new registrationModel(data).save() 
	})
	.then((doc)=>{
		console.log(doc);
		return userModel.update({ username : {$in : registrationNumbers} }, { $set : { status : true }}, { multi: true })
	})
	.then(()=>{
		return res.json(true);
	})
	.catch(next);
	
});

router.route('/checkRegNum')
.get((req, res, next)=>{
	userModel.count({ username : req.query.regNum })
	.then((doc)=>{
		if(!doc)
			return res.status(404).send("Not Found");
		
		res.status(200).send("Found");
	})
	.catch(next);
})

router.route('/checkStatus')
.get((req, res, next)=>{
	userModel.count({ username : req.query.regNum, status : false })
	.then((doc)=>{
		if(doc == 1)
			return res.status(200).send("Found");
		
		res.status(409).send("Already registered");
		
	})
	.catch(next);
})

router.route('/data')
.get((req, res, next)=>{
	
	roomModel.find()
	.then((doc)=>{
		res.json(doc);
	})
	.catch(next);

})
module.exports = router;