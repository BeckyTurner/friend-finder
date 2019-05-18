// import friends list
var friends = require('../data/friends.js');

module.exports = function(app) {

	// gets friend list
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// adding new friend
	app.post('/api/friends', function(req, res) {
		// console.log(req.body.scores);

		// Capture the user input object
		var userInput = req.body;

		var userResponses = userInput.scores;

		var matchName = "";
		var matchImage = "";
		var totalDifference = 10000; 

		// iterating over friends list
		for (var i = 0; i < friends.length; i++) {
			// compute differences for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// if lowest difference, record the friend match
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// add user
		friends.push(userInput);

		//send best friend match
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
