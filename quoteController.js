
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');



exports.getGen = async(req,res) => {
	res.json({});
}

exports.getQuotes = async (req, res) => {



// **********
//oldest working version

// const results = await Quote.find({}, function (err, quotes) {
// if(err) throw err;

// });
// //note that the working version passes an object with one key:value pair. The key is "results" which returns an array of objects. Each object is the results from mongo. 

// res.json({results});
// res.render('index', { results });


// **********
//here you got findone to work
// const output = await Quote.findOne({'name': 'Mark'}, 'name quote _id', function (err, person){
// 	// console.log(person);
	
// });

// var results = [];
// 	results.splice(0,0,output);
// 	// console.log(arr);
// res.render('index',  {results} );
// **********


const results = await Quote.find({}, function (err, quotes){
	if(err) throw err;

}).sort('-created_at');

// console.log(results);
res.render('index', {results});



}



exports.postQuote = async (req, res) => {

if(req.body.name == false){res.redirect('/');}
const nqi = req.body;
const nqid = { nqi };
var newQuote = await Quote(nqi) ;

var waiting = await newQuote.save(function(err) {
	if (err) throw err;
	// 
});


var results = await Quote.find({}, function (err, quotes) {
	if (err) throw err;
});



res.redirect('/');

	
};


exports.deleteQuote = async (req, res) => {

	// console.log(req.params.id);

await Quote.remove({ _id: req.params.id }, function(err) {
    if (!err) {
            console.log("success");
    }
    else {
            console.log("error");    }
});

res.redirect('/');

};


exports.editQuote = async (req, res) => {
	// res.json(req.protocol);
//here you got findone to work
var id = req.params.id;
const output = await Quote.findOne({_id: id}, 'name quote _id item', function (err, person){
	// console.log(person);
	
});

if(output==false)output = {name:"name",quote:"quote"};

var results = [];
	results.splice(0,0,output);
	// console.log(arr);

// res.json(results);
	res.render('edit', {results});
};


exports.submitEdit = async (req, res) =>{

console.log(req.body);
//mongo has a find and replace
const quote = await Quote.findOneAndUpdate({ _id: req.body._id}, req.body, {
	new: true, //return the new store instead of the old one [returning old is the default]
	runValidators: true

}).exec();


//need to add findone and update here. 

res.redirect('/');
// res.json(req.body);

};


//wes editing code

// const store = Store.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})

//old shit

	//res.send('Hello World');
//	res.sendFile(__dirname+'/index.html');


// var quotes = [{name: "blorp", quote: "Say I"}];

// res.render('index', {title: 'hey', message: "Hello there!", quotes});
// 	//note dirname contains javascripr source code



// db.collection('quotes').find().toArray(function(err, results){
 
// //console.log(results);

// res.render('index', {results});
	
// })