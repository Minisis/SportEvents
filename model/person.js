 var mysql = require('./../lib/mysql');

var get = function(key, cb) {
	var sql = "SELECT * FROM PEOPLE WHERE PERSONA_CLAVE = '" + key + "'";
	mysql.query(sql, function(err, rows) {
		var person = {};
		var aux = rows[0];
		if (aux) {
			person = {
				key  : aux['persona_clave'],
				name : aux['persona_nombre'],
				last : aux['persona_apellido'],
				registeredDate : aux['persona_registro']
			};
			var venue = {
				name : aux['sede_nombre'],
				info : aux['sede_info']
			};
			var event = {
				name : aux['deporte_nombre'],
				info : aux['deporte_info'],
				urlimg : aux['deporte_urlimg']
			};
			var category = {
				name : aux['categoria_nombre'],
				info : aux['categoria_info']
			};
			person.venue = venue;
			venue.event = event;
			event.category = category;
		}
		cb(err, person);
	});
};

exports.get = get;
