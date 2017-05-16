describe("Game of Life", function(){

	describe("living cell", function(){

		it("should exist", function(){
			expect(Cell).toBeDefined();
		});
		it("should be able to be alive", function() {
			expect(new Cell(true).isAlive).toBeDefined();
		});
		it("should be able to be dead", function() {
			expect(new Cell(false).isAlive).toBeFalsy();
		});
	});

	describe("Game", function(){

		beforeEach(function() {
			game = new Game([new Cell(true), new Cell(true)]);
        });

		it("should exist", function() {
			expect(Game).toBeDefined();
		});
		it("should have a board", function(){
			expect(new Game().board).toBeDefined();
		});
		it("should have a cell", function(){
			expect(new Game([new Cell(true)]).board[0][0]).toBeDefined();
		});
		it("should allow multiple cells", function(){
			expect(game.board[0][0]&&game.board[0][1]).toBeTruthy();
		});
		it("should allow multiple cells", function(){
			expect(game.board[0][0]&&game.board[0][1]).toBeTruthy();
		});
	});

});