var express = require('express'),
	router = express.Router();

module.exports = function(app){
	
	/*
	router.get('/', function(req, res) {
        res.sendFile('../public/index.html'); // load our public/index.html file
    });
	*/
	
	router.get('/products', function(req,res){
		console.log('in product controller');
		res.redirect('/#/products');
	});

	//router.delete('/employees/'+ id ,home.remove);
	app.use(router);
};