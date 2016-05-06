var db_url = process.env.DBURL || '172.27.59.139:27017';

module.exports = {
	url : 'mongodb://' + db_url + '/login_master'
}