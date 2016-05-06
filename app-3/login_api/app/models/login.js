var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	path = require('path');

var LoginSchema = new Schema({
	username : {type:String},
	password : {type:String}
});

module.exports = mongoose.model('Login', LoginSchema);
