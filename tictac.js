var Square = function (place) {
	this.place = place;
	this.marker = null;
};

Square.prototype.isOccupied = function() {
	return this.marker ? true : false;
};

var board = [];

for (var i = 1; i < 10; i++) {
	board.push(new Square(i));
}

	console.log(board);
var Player = function(marker) {
	this.marker = marker;
	this.score = 0;
};

Player.prototype.placeMarker = function(square) {
	if(square.isOccupied()) {
		console.log("space occupied for square " + square.place);
		return false;
	} else {
		square.marker = this.marker;
		console.log("success");
		return true;
	}
};

var AI = function(marker) {
	Player.call(this, marker);
};

AI.prototype = Object.create(Player.prototype);
AI.prototype.constructor = AI;

AI.prototype.executeMove = function(){
	var stopFlag = false;
	while(!stopFlag){
		var randomPlace = Math.floor(Math.random() * (9));
		stopFlag = this.placeMarker(board[randomPlace]);
	}


};