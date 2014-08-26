var express = require('express');
var router = express.Router();
var personController = require('./../controller/person');

router.get('/', personController.get);

module.exports = router;
