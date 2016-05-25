var Square = function (place) {
	this.place = place;
	this.marker = null;
};

Square.prototype.isOccupied = function() {
	return this.marker ? true : false;
};

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

var Game = function() {
	this.winningMoves = [
		[1,2,3], [4,5,6], [7,8.9], 
		[1,4,7], [2,5,8], [3,6,9], 
		[1,5,9], [3,5,7]
	];
	this.createBoard();
};

Game.prototype.createBoard = function(){
	this.board = [];

	for (var i = 1; i < 10; i++) {
		this.board.push(new Square(i));
	}

	console.log(this.board);
};

Game.prototype.awardVictory = function(player) {
	player.score++
};

Game.prototype.checkVictory = function(){
	var(var i = 0; i < this.winningMoves.length; i++) {
		var candidateArray = this.winningMoves[i];
		if(candidateArray[0].marker == candidateArray[1].marker 
		&& candidateArray[0].marker == candidateArray[2].marker) {
			return true;
		}
	}
}

