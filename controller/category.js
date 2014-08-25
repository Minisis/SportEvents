var categoryModel = require('./../model/category');

var get = function(req, res) {
	var even = req.query.event || null;
	if (even) {
		categoryModel.getByEvent(even, function(err, categories) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : categories });
		});
	}
	else {
		categoryModel.get(function(err, categories) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : categories });
		});
	}
};

exports.get = get;
