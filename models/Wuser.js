const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise; 
const md5 = require('md5');
const validator = require('validator'); //this fucks with the validate part of email. 
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('password-local-mongoose'); //this takes care of adding the fields and methods to our schema. Damn.

const wuserSchema = new Schema ({
	email:{
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please Supply an Email Address'
	}
	name: {
		type: String,
		required: 'Please supply a name',
		trim: true
	}



});

wuserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
wuserSchema.plugin(mongodbErrorHandler);


module.exports = mongoose.model('Wuser', wuserSchema);

