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

var Player = function(marker) {
	this.marker = marker;
	this.score = 0;
};

Player.prototype.placeMarker = function(square) {
	if(square.isOccupied) {

	} else {
		square.marker = this.marker;
		
	}
};