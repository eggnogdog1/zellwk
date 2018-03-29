const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema

const quoteSchema = new Schema({
	name: { type: String, required: true, trim: true},
	quote: { type: String, required: true, trim: true},
	created_at: Date,
	updated_at: Date,
	item: [String]
});

//now we're going to add some stuff

quoteSchema.pre('save', function(next){
	//get the current date
	const currentDate = new Date();

	this.updated_at = currentDate;

	if(!this.created_at)
		this.created_at = currentDate;

	next()
});


//now we have to actually create a model for using the schema

var Quote = mongoose.model('Quote', quoteSchema);

//and now make this available throughout the app

module.exports = Quote;