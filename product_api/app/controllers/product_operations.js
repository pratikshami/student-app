var path = require('path'),
	fs = require('fs'),
	//md5 = require('MD5'),
	//Employee = require('../models/employee');
	ProductModel = require('../models/product'); 

	module.exports = {

	list: function(req,res){
		console.log('in home controller');
		products = [];
		ProductModel.find({},{},function(error,prds){
			if(error){throw error;}
			products = prds;
			console.log('product list');
			res.json(products);	
		});
	},

	get: function(req,res){
		console.log('in home controller');
		ProductModel.findOne({id:req.params.id},function(err,product){
			if(err){ throw err; }
			res.json(product);
		});
	},

	create: function(req,res){
		console.log('hello in create function');
		console.log('creating product data');
		console.log('req.body.id : ' + req.body.id);
		console.log('req.body.name : ' + req.body.name);
		console.log('req.body.description : ' + req.body.description);
 		
 		var newProduct = new ProductModel({
				id: req.body.id,
				name: req.body.name,
				description:req.body.description
				});
		newProduct.save(function(err, product) {
				res.json(product);
 		});
	},

	remove: function(req,res){
		console.log('hello in remove function');
		console.log(req);
		ProductModel.findOne({id:req.params.id},function(err,product){
			if(err){ throw err; }
			ProductModel.remove({id:req.params.id},function(err,product){
				console.log('Product removed ' + product);
				res.json(true);
			});				
		});
	}
};
