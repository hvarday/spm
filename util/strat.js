var path = require('path')
var LocalStrategy = require('passport-local');
var User = require(path.join(__dirname, '..', 'models', 'user'));

module.exports = function (passport){

    passport.use(
        new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
      function(req, username, password, done) {
        User.findOne({ username: username }, function (err, user) {

              if (err) { return done(err); }

              if (!user) { return done(null, false, req.flash('failureFlash', 'User Not Found!')); }

              user.verifyPassword(password)
              .then(function(val){
                  if(val)
                        return done(null, user);
                  else
                        return done(null, false, req.flash('failureFlash', 'Invalid Password!'));
              })
              .catch(done);
        });
      }
    ));

    passport.serializeUser(function(user, cb) {
      cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
      User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
      });
    });

}