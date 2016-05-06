var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	path = require('path');

var ProductSchema = new Schema({
	id : {type:Number},
	name : {type:String},
	description : {type:String}
});


module.exports = mongoose.model('Product', ProductSchema);
