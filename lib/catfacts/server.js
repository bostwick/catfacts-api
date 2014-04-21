var express = require('express'),
	CatfactsController = require('./controllers/catfacts-controller'),
	IndexController = require('./controllers/index-controller');

var CatfactsServer = function() {
	console.log('CatfactsServer created.');
	this.app = express();
};

CatfactsServer.prototype.listen = function() {
	console.log('Listening on port 3000.');

	this.app.listen(3000);
	return this;
};

CatfactsServer.prototype.initializeRoutes = function() {
	console.log('Initializing routes.');

	this.app.get('/', IndexController.index);
	this.app.get('/catfacts', CatfactsController.index);
	this.app.get('/catfacts/:factId', CatfactsController.show);

	return this;
};

module.exports = CatfactsServer;