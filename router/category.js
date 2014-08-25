var express = require('express');
var router = express.Router();
var categoryController = require('./../controller/category');

router.get('/', categoryController.get);

module.exports = router;
