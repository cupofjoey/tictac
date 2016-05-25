var Square = function (place) {
	this.place = place;
	this.occupied = null;
};

Square.prototype.isOccupied = function() {
	return this.occupied ? true : false;
};

var board = [];

for (var i = 1; i < 10; i++) {
	board.push(new Square(i));
}
console.log(board);