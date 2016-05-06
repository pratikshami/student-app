var express = require('express'),
	router = express.Router(),
	cors = require('cors'),
	operations = require('./controllers/login_operations');


module.exports = function(app){
	
	/*
	router.use(function(req, res, next) {
		console.log("Origin : " + req.headers.origin);
		//console.log("req.body.username : " + req.body.username);
		//console.log("req.body.password : " + req.body.password);
    	res.header('Access-Control-Allow-Origin', '*' );
   		res.header('Access-Control-Allow-Methods', '*');
    	//res.header('Access-Control-Allow-Credentials', false);
    	res.header('Access-Control-Max-Age', '86400');
    	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    	// the next() function continues execution and will move onto the requested URL/URI
    	next();
	});

	*/
	router.use(cors());
	router.post('/authenticate', operations.check);
	
	app.use(router);
};