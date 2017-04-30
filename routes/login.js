var router = require('express').Router(),
    passport = require('passport');


router.route('/')
.get(function(req, res, next){
    res.render('login');
})
.post(passport.authenticate('local', { failureRedirect : '/login', failureFlash : true }), function(req, res, next){
    console.log("HERE");
    res.redirect("home");
});

module.exports = router;