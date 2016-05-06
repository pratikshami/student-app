var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	methodOverride = require('method-override'),
	db = require('./config/db'),
	routes = require('./app/routes'),
	mongoose = require('mongoose');

var port = process.env.PORT || 8002;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//app.use(methodOverride());//'X-HTTP-Method-Override'

routes(app);

mongoose.connect(db.url);

mongoose.connection.on('open',function(){
	console.log('mongoose connected');
});

app.listen(port,function(){
	console.log('sever is listening on ' + port);
});

exports = module.exports = app;