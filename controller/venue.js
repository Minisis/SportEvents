var venueModel = require('./../model/venue');

var get = function(req, res) {
	venueModel.get(function(err, venues) {
		if (err) return res.status(404).json({ err : err });
		res.status(200).json({ data : venues });
	});
};

exports.get = get;
