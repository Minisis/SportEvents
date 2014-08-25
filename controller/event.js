var eventModel = require('./../model/event');

var get = function(req, res) {
	var venue = req.query.venue || null;
	if (venue) {
		eventModel.getByVenue(venue, function(err, events) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : events });
		});
	}
	else {
		eventModel.get(function(err, venues) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : venues });
		});
	}
};

exports.get = get;
