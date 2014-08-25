var express = require('express');
var router = express.Router();
var loadController = require('./../controller/load');

router.get('/', loadController.get);

module.exports = router;
