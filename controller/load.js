var venueModel    = require('./../model/venue');
var eventModel    = require('./../model/event');
var categoryModel = require('./../model/category');
var async		  = require('async');

var getCategories = function(even, cb) {
	var finalCategories = [];
	categoryModel.getByEvent(even, function(err, categories) {
		if (err) return cb(err);
		async.each(categories, function(cat, callback) {
			var auxCat = {
				id 	 : cat['categoria_id'],
				name : cat['categoria_name'],
				info : cat['categoria_info']
			};
			finalCategories.push(auxCat);
			callback();
		}, function() {
			cb(null, finalCategories);
		});
	});
};

var getEvents = function(venue, cb) {
	var finalEvents = [];
	eventModel.getByVenue(venue, function(err, events) {
		if (err) return cb(err);
		async.each(events, function(e, callback) {
			var auxEvent = {
				id 	   	 : e['deporte_id'],
				name   	 : e['deporte_name'],		
				info   	 : e['deporte_info'],
				imgurl 	 : e['deporte_imgurl'],
				branches : e['branches'] 
			};
			getCategories(auxEvent.id, function(err, categories) {
				if (err) {
					callback(err);
				}
				else {
					auxEvent.categories = categories;
					finalEvents.push(auxEvent);
					callback();
				}
			});
		}, function(err) {
			cb(err, finalEvents);
		});
	});
};

var get = function(req, res) {
	var finalVenues = [];
	venueModel.get(function(err, venues) {
		if (err) return res.status(404).json({ err : err });
		async.each(venues, function(venue, callback) {
			//getting venue info...
			var auxVenue = {
				id 	 : venue['sede_id'],
				name : venue['sede_name'],
				info : venue['sede_info']
			};
			getEvents(auxVenue.id, function(err, events) {
				if (err) {
					callback(err);
				}
				else {
					auxVenue.events = events;
					finalVenues.push(auxVenue);
					callback();
				}
			});
		}, function(err) {
			if (err) return res.status(404).json({ err : err });
			res.status(200).json({ data : finalVenues });
		});
	});
};

exports.get = get;
