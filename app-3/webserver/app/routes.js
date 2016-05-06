var express = require('express'),
	router = express.Router();

module.exports = function(app){
	
	/*
	router.get('/', function(req, res) {
        res.sendFile('../public/index.html'); // load our public/index.html file
    });
	*/
	
	router.get('/students', function(req,res){
		console.log('in student controller');
		res.redirect('/#/students');
	});

	//router.delete('/employees/'+ id ,home.remove);
	app.use(router);
};