var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var router = require('./router');
var app = express();

//openshift ip and port
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//global middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
//development middleware
if (app.get('env') === 'development') {
	app.use(morgan());
	app.use(errorHandler());
}
//router
app.use(router);

var server = http.createServer(app);
server.listen(port, ip, function() {
	console.log('Server up on ' + ip +':'+ port);
});

