var venueRouter = require('./venue');

var router = function(app) {
	app.use(venueRouter);	
};

module.exports = router;
