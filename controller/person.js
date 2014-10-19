var personModel = require('./../model/person');

var get = function(req, res) {
	var key = req.query.key || null;
	if (key) {
		personModel.get(key, function(err, person) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : person });
		});
	}
	else {
		res.status(404).json({ err : 'Key needs to be provided' });
	}
};

exports.get = get;
