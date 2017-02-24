

window.onload = function () {
	var game = new Phaser.Game(800, 500, Phaser.AUTO, "gameContainer");
	

	game.state.add('CuisineF', BasicGame.CuisineF);
	game.state.add('salon2', BasicGame.salon2);
	game.state.add('rue', BasicGame.rue);
	game.state.add('ruehomme', BasicGame.ruehomme);

	console.log(game.state['CuisineF']);

	

	game.state.start('salon2');
}