//Jamie Sookprasong
//Prism Skylabs Challenge

var Board = function(side_length) {
    // do initialization here... 
   
   //since efficiency isn't priority and clarity is, go with matrix not 1D array
	var grid = [];

	//create empty board
	for(var i=0; i<side_length; ++i) {
	    matrix[i] = new Array(side_length);
	}
};

Board.prototype.square_is = function(row, col, X_or_O) {
    // do stuff...

    //assign an 'X' or 'O' to the cell in the grid
    this.grid[row][col] = X_or_O;
};

Board.prototype.winner = function() {
    // returns either 'X', 'O', or null

    //there is a winner when one occupied cell has cells on either side occupied
    	//with same symbol
    for(var r=1; r<side_length-1; ++r) { //adjust bounds since just looking for
    	for(var c=1; c<side_length-1; ++c) { //middle cell & avoid out of bounds
    		 
			if(this.grid[r-1][c] === this.grid[r][c]  &&  
				this.grid[r+1][c] === this.grid[r][c]) {
    		 	return true; //win with above and below
			} else if (this.grid[r][c-1] === this.grid[r][c]  &&  
						this.grid[r][c+1] === this.grid[r][c]) {
				return true; //win with left and right
			} else if (this.grid[r-1][c-1] === this.grid[r][c]  &&  
						this.grid[r+1][c+1] === this.grid[r][c]) {
				return true; //win with above left and below right
			} else if (this.grid[r-1][c+1] === this.grid[r][c]  &&  
						this.grid[r+1][c-1] === this.grid[r][c]) {
				return true; //win with above right and below left
			}
    	}
    }
};

function game1() {
    var board = new Board(3);

    board.square_is(1, 1, 'X');
    board.square_is(1, 0, 'O');
    board.square_is(0, 1, 'X');
    board.square_is(2, 1, 'O');
    board.square_is(0, 2, 'X');
    board.square_is(2, 0, 'O');

    // check for a winner - won't find one.
    if (board.winner()) {
        alert('Winner!! -> ' + board.winner());
        return;
    }

    board.square_is(0, 0, 'X');

    // check for a winner - X has won.
    if (board.winner()) {
        alert('Winner!! -> ' + board.winner());
        return;
    }
}