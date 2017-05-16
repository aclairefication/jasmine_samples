describe("Game of Life", function(){

	describe("living cell", function(){

		it("should die when it < 2 neighbors", function(){
			expect(new Cell(0).isAlive).toBeFalsy();
			expect(new Cell(1).isAlive).toBeFalsy();
		});

		it("should stay alive when it has 2 or 3 neighbors", function(){
			expect(new Cell(2).isAlive).toBeTruthy();			
			expect(new Cell(3).isAlive).toBeTruthy();			
		});

		it("should die when it has > 3 neighbors", function(){
			expect(new Cell(4).isAlive).toBeFalsy();
			expect(new Cell(5).isAlive).toBeFalsy();
			expect(new Cell(6).isAlive).toBeFalsy();
			expect(new Cell(7).isAlive).toBeFalsy();
			expect(new Cell(8).isAlive).toBeFalsy();
		});

	});

	describe("dead cell", function(){

		it("should resurrect when it has 3 neighbors", function(){
			//create dead cell ==> give it enough new neighbors ==> check its neighbors ==> change it to be alive
			deadCell = new Cell(8).isAlive;
			deadCell.addNeighbors(3); //can't pass a primitive! :(
			expect(deadCell.isAlive).toBeTruthy();
		});

	});

});