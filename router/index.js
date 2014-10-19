var venueRouter    = require('./venue');
var eventRouter    = require('./event');
var categoryRouter = require('./category');
var loadRouter 	   = require('./../controller/load'); 
var personRouter   = require('./person');

var router = function(app) {
	app.get('/', function(req, res) {
		res.send('<h1>Hello bros...</h1>');
	});
	app.use(function(req, res, next){
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
		if (req.method === 'OPTIONS') {
			res.send();	
		}
		else {
			next();
		}	
	});
	app.get('/load', loadRouter.get);
	app.use('/venue', venueRouter);
	app.use('/event', eventRouter);
	app.use('/category', categoryRouter);
	app.use('/person', personRouter);
};

module.exports = router;
