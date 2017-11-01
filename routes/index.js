var express = require('express'),
    router = express.Router(),
    registrationModel = require('../models/registration');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/login');
//   res.render('index', { title: 'Express' });
});

router.use('/home', (req, res, next)=>{

    if(req.user)
        return next();
    else
        res.redirect('/login');

})

router.route('/home')
.get(function(req, res, next){
    res.render("home");
})
.post((req, res, next)=>{
    var temp = JSON.parse(JSON.stringify(req.user));
    delete temp.password;
    if(!req.user.status)
        return res.json(temp);
    
    registrationModel
    .findOne({$or : [{ reg1 : temp.username }, { reg2 : temp.username }, { reg3 : temp.username }]})
    .populate('room')
    .then((data)=>{
        console.log(data)
        temp.room = data.room.name
        return res.json(temp);
    })
    .catch(next);
    
})

router.get("/logout", function(req, res, next){
    req.logout();
    res.redirect("/login");
})

module.exports = router;
