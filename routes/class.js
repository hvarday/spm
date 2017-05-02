var router = require('express').Router(),
    routeAuth = require("../util/routeAuth"),
    schedule = require("../models/schedule"),
    classModel =  require("../models/class");

router.all(routeAuth("all"))

router.route('/')
.get(function(req, res, next){
    res.render("class-home");
})

router.route('/schedule')
.get(function(req, res, next){
    res.render("class-view");        
});

router.route('/list')
.get(function(req, res, next){
    
//     var time = new Date();
//     time.setHours(0);
//     time.setMinutes(0);
//     time.setSeconds(0);
//     time.setMilliseconds(0);

//     schedule.find({ date : { $gte : time }})
//     .then(function(doc){
//         res.json(doc);
//     })
//     .catch(next);

    
    classModel.find()
    .then(function(doc){
        res.json(doc);
    })
    .catch(next);
})

router.route("/schedule/:id")
.get(function(req, res, next){
    
//     var schedule1 = {

//         '8 - 9' : "Theory",
//         '9 - 10' : "Theory",
//         '10 - 11' : "Theory",
//         '11 - 12' : "Theory",
//         '12 - 13' : "Theory",
//         '13 - 14' : "Theory",
//         '14 - 15' : "Theory",
//         '15 - 16' : "Theory",
//         '16 - 17' : "Theory",
//         '17 - 18' : "Theory",
//         '18 - 19' : "Theory"

//     }
    
//     var time = new Date();
//     time.setHours(0);
//     time.setMinutes(0);
//     time.setSeconds(0);
//     time.setMilliseconds(0);
//     time.setDate(2);
//     var temp = {
//         class : "5907bc549139a504c9113852",
//         schedule : schedule1,
//         date : time
//     }
//     schedule(temp).save()
//     .then(function(doc){
//         res.json(doc);
//     })
//     .catch(next);

    schedule.find({ class : req.params.id })
    .populate("class")
    .populate("bookings.user")
    .then(function(doc){
        res.json(doc);
    })
    .catch(next);

})


router.route("/book")
.get(function(req, res, next){
    res.render('class-book');
})
.post(function(req, res, next){
    console.log(req.body);
    req.body.user = req.user._id;
    req.body.date = new Date(req.body.date);
    var date = (req.body.date),
        classP = req.body.class,
        slot = req.body.slot,
        purpose = req.body.purpose;

    
    var time = date;
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    
    schedule.findOneAndUpdate({ class : classP, date : time }, { $push : { bookings : req.body }}, { new : true })
    .then(function(doc){
        res.json(doc);        
    })
})

router.get("/:id", function(req, res, next){
    classModel.findById(req.params.id)
    .then(function(doc){
        res.json(doc);
    })
    .catch(next);
})

module.exports = router;