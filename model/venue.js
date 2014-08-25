var mysql = require('./../lib/mysql');

var get = function(cb) {
	var sql = 'SELECT * FROM ACTIVE_SEDES';
	mysql.query(sql, function(err, rows) {
		cb(err, rows);
	});
};

exports.get = get;
