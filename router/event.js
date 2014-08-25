var express = require('express');
var router = express.Router();
var eventController = require('./../controller/event');

router.get('/', eventController.get);

module.exports = router;
