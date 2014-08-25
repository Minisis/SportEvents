var mysql = require('./../lib/mysql');

var get = function(cb) {
	var sql = 'SELECT * FROM DEPORTE_CAT';
	mysql.query(sql, function(err, rows) {
		cb(err, rows);
	});
};

var getByEvent = function(even, cb) {
	var sql = 'SELECT * FROM DEPORTE_CAT WHERE DEPORTE_ID = ' + even;
	mysql.query(sql, function(err, rows) {
		cb(err, rows);
	});
};

exports.get = get;
exports.getByEvent = getByEvent;
