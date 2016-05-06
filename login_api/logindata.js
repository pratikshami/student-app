var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var db_url = process.env.DBURL || 'localhost:27017';

var url = 'mongodb://' + db_url + '/login_master';

MongoClient.connect(url, function (err, db) {
	if (err) {
    	console.log('Unable to connect to the mongoDB server. Error:', err);
  	} else {
    //HURRAY!! We are connected. :)
    	console.log('Connection established to', url);

    	var collection = db.collection('logins');
    	collection.insert({username:'sam',password:'sam'}, function (err, result) {
    		if (err) {
       			console.log(err);
     		} else {
       			console.log('Login credentials created');
    		}
    		//Close connection
    	db.close();
		});
	}
});
