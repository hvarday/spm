var Promise = require('bluebird'),
    mongoose = require('mongoose'),
    bcrypt = Promise.promisifyAll(require('bcrypt')),
    SALT_WORK_FACTOR = 10;

var user = mongoose.Schema({

    username : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    name : { type : String, required : true },
    branch : { type : String, required : true   },
    cgpa : { type : Number, required : true },
    status : { type : Boolean, required : true, default : false },
    room : { type : String },
    rank : { type : Number }
})

user.pre('save', function (next) {
    var doc = this;
//     console.log(`WORKING To Hash ${this.password}`);
  // only hash the password if it has been modified (or is new)
    if (!doc.isModified('password')) return next();

  // generate a salt
    bcrypt.genSaltAsync(SALT_WORK_FACTOR)
    .then(function (salt) {
      // hash the password using our new salt
        return bcrypt.hashAsync(doc.password, salt);
    })
    .then(function (hash) {

      // override the cleartext password with the hashed one
        doc.password = hash;
        next();
    })
    .catch(next);

});

user.pre('update', function (next) {
    var doc = this.getUpdate();
    
  // only hash the password if it has been modified (or is new)
    if (!doc.$set.password) return next();

  // generate a salt
    bcrypt.genSaltAsync(SALT_WORK_FACTOR)
    .then(function (salt) {
      // hash the password using our new salt
        return bcrypt.hashAsync(doc.$set.password, salt);
    })
    .then(function (hash) {
      // override the cleartext password with the hashed one
        doc.password = hash;
        next();
    })
    .catch(next);

});

user.methods.verifyPassword = function (pass) {
    return bcrypt.compareAsync(pass, this.password);
};

// user.post('find', function(doc, next) {
//     var modelData;
//     if(!doc.status) return next();
    
//     registrationModel.find({$or : [{ reg1 : doc.username }, { reg2 : doc.username }, { reg3 : doc.username }]})
//     .then((data)=>{
//         modelData.room = data.room;
//         next();
//     })
//     .catch(next);
    
// });

// user.virtual('room', {
//   ref: 'BlogPost',
//   localField: '_id',
//   foreignField: 'author'
// });

module.exports = mongoose.model("user", user);