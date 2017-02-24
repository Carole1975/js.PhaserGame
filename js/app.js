

window.onload = function () {
	var game = new Phaser.Game(800, 500, Phaser.AUTO, "gameContainer");
	var BasicGame = {
	};

	game.state.add('cuisineF', BasicGame.cuisineF);
	game.state.add('rue', BasicGame.rue);
	game.state.add('ruehomme', BasicGame.ruehomme);

	

	

	game.state.start('cuisineF');
};