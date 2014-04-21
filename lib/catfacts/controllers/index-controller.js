var IndexController = {};

IndexController.index = function(req, res) {
	res.send(200, {
		"links": [
			{
				"href": "/catfacts",
				"rel": "catfacts"
			}
		]
	});
};

module.exports = IndexController;