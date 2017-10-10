var friends = require('../data/friends.js');

console.log(friends);

function scoreDiff(user, newScore){
	return Math.abs(user.scores.reduce((a, n) => {
		return a + parseInt(n);
	}, 0) - newScore);
}

function friendMatch(user){
	let score = user.scores.reduce((a, n) =>{
		return a + parseInt(n);
	},0);

	return friends.reduce((a, n) =>{
		if (scoreDiff(a, score) < scoreDiff(n, score)){
			return a;
		} else {
			return n;
		}
	});
}

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req,res){
		let user = {name: req.body.name, img: req.body.img, scores: req.body['scores[]']};
		res.json(friendMatch(user));
		friends.push(user);
	});
}