var express = require('express'),
	router = express.Router(),
	operations = require('./controllers/product_operations');

module.exports = function(app){
	
	/*
	router.get('/', function(req, res) {
        res.sendFile('../public/index.html'); // load our public/index.html file
    });
	*/
	
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
	
	router.get('/products', operations.list);
	router.get('/products/:id', operations.get);
	router.post('/products', operations.create);
	router.delete('/products/:id', operations.remove);

	//router.delete('/employees/'+ id ,home.remove);
	app.use(router);
};