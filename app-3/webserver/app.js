var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	methodOverride = require('method-override'),
	path = require('path');
	routes = require('./app/routes');

var port = process.env.PORT || 8001;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());

app.use("/",express.static(path.join(__dirname,'./public')));

routes(app);

app.listen(port,function(){
	console.log('sever is listening on ' + port);
});

exports = module.exports = app;