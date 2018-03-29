const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoose=require('mongoose');
const User = require('./models/User');
const Quote = require('./models/Quote');
const routes = require('./routes')
const session = require('express-session')
const expressValidator = require('express-validator');

mongoose.connect('mongodb://zellwk:zellwk@ds111059.mlab.com:11059/zellwk');
mongoose.Promise = global.Promise; //tells ES6 to use the global promise

//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}));


// console.log('May Node be with you');

//body parser is a middleware. He says to put it BEFORE your crud handlers.


app.listen(3000, function(){
	console.log('listening on 3000');
});


//look up at the routes const, that's how we get there.
app.use('/', routes);

app.set('views', './views');

app.set('view engine', 'pug');


//use sessions for tracking logins. This is from the authentication tutorial here: https://medium.com/of-all-things-tech-progress/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

// app.get('/', (req,res)=> {

// 	})
// });


// app.get('/delete/:id', async (req, res) => {




// // res.json(req.params)

// // var results = await Quote.find({}, function (err, quotes) {
// // 	if (err) throw err;

// // });

// // res.render('index', { results } );

// res.redirect('/');

// });




// var newUser = User({
// 	name: 'Peter Quill',
// 	username: 'starlord55',
// 	password: 'password',
// 	admin: true
// });


// var newUser = User({
// 	name: 'zPeter Quill',
// 	username: 'zstarlord55',
// 	password: 'password',
// 	admin: true
// });

// newUser.save(function(err){
// 	if(err) throw err;
// 	console.log('User Created');
// })








//Hey, this is the old mongo documentation. We don't need it. 

// MongoClient.connect('mongodb://zellwk:zellwk@ds111059.mlab.com:11059/zellwk', (err, client) => {
// 	//start the server
// if (err) return console.log(err);

// db = client.db('zellwk');




// });















