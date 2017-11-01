var router = require('express').Router(),
    passport = require('passport');


router.route('/')
.get(function(req, res, next){
    if(req.user){
        console.log(JSON.stringify(req.user));
        return res.redirect("/home");        
    }
    res.render('login');
})
.post(passport.authenticate('local', { failureRedirect : '/login', failureFlash : true }), function(req, res, next){
    res.redirect("home");
});

module.exports = router;