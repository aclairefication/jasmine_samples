function Cell(numberOfNeighbors) {
	if(numberOfNeighbors < 2 || numberOfNeighbors > 3){
		this.isAlive = false;		
	} else{
		this.isAlive = true;
	}
}
Cell.prototype.addNeighbors = function(numberOfNeighbors){

	if(numberOfNeighbors === 1 || numberOfNeighbors === 0){
		this.isAlive = false;		
	} else{
		this.isAlive = true;
	}
};