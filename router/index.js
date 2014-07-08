var express = require('express');
var router = express.Router();
var hello = require('./handlers/hello');

router.get('/hello', hello.onPost); 

module.exports = router;
