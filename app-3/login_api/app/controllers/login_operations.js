var path = require('path'),
	fs = require('fs'),
	LoginModel = require('../models/login'); 

	module.exports = {

	check: function(req,res){
		/*
		var newLogin = new LoginModel({
				username: req.body.username,
				password:req.body.password
				});
		newLogin.save(function(err, login) {
				res.json(login);
 		});
 		*/
		console.log(req.body);

		//console.log('req.body : "'+ req.body + '"');
		//console.log('req.body.username : "'+ req.body.username + '"');
		//console.log('req.body.password : "'+ req.body.password + '"');
		
		LoginModel.findOne({username:req.body.username,password:req.body.password},function(err,login){
			if(err){ throw err; }
			//res.json(login);
			
			if(login){
				res.json(true);	
			}else{
				res.json(false);
			}
		
		});
	}

};
