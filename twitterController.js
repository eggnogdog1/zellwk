const mongoose = require('mongoose');
const Twit = require('twit');


exports.home = async (req, res) => {



var T = new Twit({
	consumer_key: "TOf7NsBMCCjIivuowGbjF9NdY",
	consumer_secret: "wK6M89EY9HvPvvAIEqr7GJFmfauyr6wykPah1eJ9WqWOaXzGNU",
	access_token: "378239940-OUv5Syh0iczVXfJyTf7ZCC41uheXHx7E3piY265D",
	access_token_secret: "e6kaPEHcZ97Un8wet4CSQl79K7xAAxulAQXyBMn3A3nuL"
});

var params = {

q: 'dannyvegacomedy',

count: 100

} // this is the param variable which will have key and value 


var data = await T.get('search/tweets', params,searchedData); 

function searchedData(err, data, response) {

console.log(data);

} 



// res.json(data);
	res.render('twitter', data);
}