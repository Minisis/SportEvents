var mysql = require('./../lib/mysql');
var async = require('async');

var get = function(cb) {
	async.parallel({
		branches : function(callback) {
			var sql = 'SELECT * FROM ACTIVE_RAMAS';
			mysql.query(sql, function(err, rows) {
				var aux = [];
				async.each(rows, function(row, callback) {
					aux.push(row.name);
					callback();
				}, function() {
					callback(err, aux);
				});
			});
		},
		events : function(callback) {
			var sql = 'SELECT * FROM DEPORTE_SEDE';
			mysql.query(sql, function(err, rows) {
				callback(err, rows);
			});
		}
	}, function(err, results) {
		var events = results.events;
		var branches = results.branches;
		if (err) return cb(err);
		async.each(events, function(e, callback) {
			e.branches = branches;
			callback();
		}, function() {
			cb(null, events);
		});
	});
};

var getByVenue = function(venue, cb) {
	async.parallel({
		branches : function(callback) {
			var sql = 'SELECT * FROM ACTIVE_RAMAS';
			mysql.query(sql, function(err, rows) {
				var aux = [];
				async.each(rows, function(row, callback) {
					aux.push(row.name);
					callback();
				}, function() {
					callback(err, aux);
				});
			});
		},
		events : function(callback) {
			var sql = 'SELECT * FROM DEPORTE_SEDE WHERE SEDE_ID = ' + venue;
			mysql.query(sql, function(err, rows) {
				callback(err, rows);
			});
		}
	}, function(err, results) {
		var events = results.events;
		var branches = results.branches;
		if (err) return cb(err);
		async.each(events, function(e, callback) {
			e.branches = branches;
			callback();
		}, function() {
			cb(null, events);
		});
	});
};

exports.get = get;
exports.getByVenue = getByVenue;
