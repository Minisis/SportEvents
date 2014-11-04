var mysql 		= require('mysql');
var config 		= require('config');
var mysqlConfig = config.mysql;

var connect = function(cb) {
	var connection = mysql.createConnection({
		host 	 : process.env.OPENSHIFT_MYSQL_DB_HOST || mysqlConfig.host,
		port 	 : process.env.OPENSHIFT_MYSQL_DB_PORT || mysqlConfig.port,
		user 	 : mysqlConfig.username,
		password : mysqlConfig.password,
		database : mysqlConfig.database
	});
	connection.connect(function(err) {
		cb(err, connection);
	});
};

var query = function(sql, cb) {
	if (!sql) return cb('SQL statement required...');
	connect(function(err, connection) {
		if (err) return cb(err);
		connection.query(sql, function(err, rows) {
			if (err) return cb(err);
			connection.end(function(err) {
				cb(err, rows);
			});
		});
	});
};

exports.query = query;
