var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    dotenv = require('dotenv'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    Promise = require('bluebird'),
    flash = require('connect-flash'),
    bodyParser = require('body-parser');

dotenv.load();

require(path.join(__dirname, 'util', 'strat'))(passport);
mongoose.promise = Promise;
mongoose.connect(process.env.MONGO_URI);

var index = require('./routes/index'),
    login = require('./routes/login');
//     users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash()),
    keys = ['keyboard', 'cat'],
    expiryDate = new Date( 5 * Date.now() + 60 * 60 * 1000 ); // 5 hours
app.use(require('cookie-session')({
    keys    :  keys,
    secret  : process.env.COOKIE_SECRET || 'secret',
    cookie  :
    {
        secure: true,
        expires: expiryDate
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
// app.use('/users', users);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
