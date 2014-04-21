var express = require('express'),
	CatfactsController = require('./controllers/catfacts-controller'),
	IndexController = require('./controllers/index-controller');

var CatfactsServer = function() {
	console.log('CatfactsServer created.');
	this.app = express();
};

CatfactsServer.prototype.listen = function() {
	var port = Number(process.env.PORT || 3000);

	this.app.listen(port, function() {
		console.log("Listening on " + port);
	});
	
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