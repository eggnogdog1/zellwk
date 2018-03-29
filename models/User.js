const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');







//create a schema

var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true

	},
	username: {type: String, required: true, unique:true, trim: true},
	password: { type: String, required: true},
	passwordConf:{
		type: String,
		required: true
	},
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date
});

//now we're going to add some stuff

userSchema.pre('save', function(next){


  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })

	// next()
});

userSchema.pre('save', function(next){


	//get the current date
	const currentDate = new Date();

	this.updated_at = currentDate;

	if(!this.created_at)
		this.created_at = currentDate;

	next()
});


//now we have to actually create a model for using the schema

var User = mongoose.model('User', userSchema);

//authenticate input against database ripped from this medium post https://medium.com/of-all-things-tech-progress/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359
userSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
        	console.log("this fired");
          return callback();
        }
      })
    });
}








//and now make this available throughout the app

module.exports = User;