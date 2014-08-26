var venueRouter    = require('./venue');
var eventRouter    = require('./event');
var categoryRouter = require('./category');
var loadRouter 	   = require('./../controller/load'); 
var personRouter   = require('./person');

var router = function(app) {
	app.get('/', function(req, res) {
		res.send('<h1>Hello bros...</h1>');
	});
	app.get('/load', loadRouter.get);
	app.use('/venue', venueRouter);
	app.use('/event', eventRouter);
	app.use('/category', categoryRouter);
	app.use('/person', personRouter);
};

module.exports = router;
