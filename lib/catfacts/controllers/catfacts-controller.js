var _ = require('underscore'),
	Facts = require("../models/facts.json");

var catfactPath = function(fact) {
	return '/catfacts/' + fact.id;
};

var CatfactsController = {};

CatfactsController.index = function(req, res) {
	var factsWithLinks = Facts.map(function(f) {
		return _.extend(f, {
			"links": [{
				"href": catfactPath(f),
				"rel": "self"
			}]
		});
	});

	res.send(200, factsWithLinks);
};

CatfactsController.show = function(req, res) {
	var factId = req.param('factId');

	var results = Facts.filter(function(f) {
		return (('' + f.id) === factId);
	});

	if (results.length === 0) {
		res.send(404);
	} else {
		var fact = results[0];

		res.send(200, _.extend(fact, {
			"links": [{
				"href": catfactPath(fact),
				"rel": "self"
			}]
		}));
	}
};

module.exports = CatfactsController;