var express = require('express');
var router = express.Router();
var venueController = require('./../controller/venue');

router.get('/', venueController.get);

module.exports = router;
