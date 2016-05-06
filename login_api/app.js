var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	methodOverride = require('method-override'),
	db = require('./config/db'),
	routes = require('./app/routes'),
	mongoose = require('mongoose');

var port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());

routes(app);

mongoose.connect(db.url);

mongoose.connection.on('open',function(){
	console.log('mongoose connected');
});

app.listen(port,function(){
	console.log('sever is listening on ' + port);
});

exports = module.exports = app;