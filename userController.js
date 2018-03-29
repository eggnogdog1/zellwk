const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getForm = async (req, res) => {
	res.render('userForm');
}




exports.register = (req, res) =>{


if (req.body.email &&
  req.body.username &&
  req.body.password &&
  req.body.passwordConf) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return 
    }
  });
}

	res.redirect('/');
}





exports.login = async (req, res) => {

if(req.body.email && req.body.password){
	User.Authenticate(req.body.email, req.body.password, function(error, user){
		return;
	});
};
res.redirect('/');

};

//wes' way
exports.loginFormWes = (req, res) => {

res.render('loginwes', {title:'Login'});

};

exports.registerFormWes = (req, res) => {
	res.render('registerwes', {title:"Register"});
};

exports.validateRegister = (req, res, next)=> {

//so we can use next here because this doesn't redirect or render or anything

req.sanitizeBody('name');
req.checkBody('name', 'You must supply a name!').notEmpty();
req.checkBody('email', 'That Email is not valid').isEmail();
req.santizieBody('email').normalizeEmail({
	remove_dots: false,
	remove_extension: false,
	gmail_remove_subaddress: false
});
req.checkBody('password', 'Password Cannot Be Blank!').notEmpty();
req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty();
req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

const errors = req.validationErrors();

if(error){
	//you did not install the flashes so that's a problem for the future lol. 
	res.render('registerwes', {title:'Register', body: req.body});
}
};






