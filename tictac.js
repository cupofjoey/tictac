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
		console.log("successfully placed in square " + square.place);

		return true;
	}
};

Player.prototype.executeMove = function(square){
	this.placeMarker(square);
}

var AI = function(marker) {
	Player.call(this, marker);
};

AI.prototype = Object.create(Player.prototype);
AI.prototype.constructor = AI;

AI.prototype.executeMove = function(){
	var stopFlag = false;
	while(!stopFlag){
		var randomPlace = Math.floor(Math.random() * (9));
		game.board;
		stopFlag = this.placeMarker(board[randomPlace]); //TODO Decouple AI's dependence on Game.board creation
	}
};

var Game = function() {
	this.currentPlayer = {};
	this.winningMoves = [
		[1,2,3], [4,5,6], [7,8.9], 
		[1,4,7], [2,5,8], [3,6,9], 
		[1,5,9], [3,5,7]
	];
	this.createBoard();
};

Game.prototype.createBoard = function(){
	this.board = [];
	for(var i = 1; i < 10; i++) {
		this.board.push(new Square(i));
	}

	console.log(this.board);
};

Game.prototype.awardVictory = function(player) {
	player.score++;
};

Game.prototype.checkVictory = function(){
	for(var i = 0; i < this.winningMoves.length; i++) {
		var candidateArray = this.winningMoves[i];
		var place1 = candidateArray[0];
		var place2 = candidateArray[1];
		var place3 = candidateArray[2];
		var squareA = this.board[place1 - 1];
		var squareB = this.board[place2 - 1];
		var squareC = this.board[place3 - 1];

		if(squareA.marker && squareA.marker == squareB.marker && squareA.marker == squareC.marker) {
			return true;
		}
	}
}

Game.prototype.commenceTurn = function(square){
	this.currentPlayer.executeMove(square);
	if(this.checkVictory()) {
		this.awardVictory(this.currentPlayer);
		this.createBoard();
		this.currentPlayer = human;
	}else{
		this.currentPlayer = this.currentPlayer == human ? ai : human;
		if(this.currentPlayer == ai){
			this.commenceTurn();
		}
	}
};

var game = new Game();
if(confirm("Click 'Ok' to be 'X,' 'Cancel' to be 'O'")) {
	var human = new Player("X");
	var ai = new AI("O");
	game.currentPlayer = human;
}else{
	var human = new Player("O");
	var ai = new AI("X");
	game.currentPlayer = human;
}

