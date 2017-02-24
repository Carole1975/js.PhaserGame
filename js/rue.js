var BasicGame = {
};

BasicGame.rue = function (game) {

};


//var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;



BasicGame.rue.prototype = {

	preload: function(){
		game.load.image("background", "assets/rue.png");
		game.load.spritesheet("woman", "assets/walkingwomangg_720.png", 100, 135);
		game.load.spritesheet('trump', '../assets/Trump.png', 143, 140);
		game.load.image('hollande', '../assets/hollande2.png');
		game.load.image('zone2', '../assets/plaque.png');
		game.load.audio('whistle', ['assets/Whistle 3 (Free Sound Effect).mp3']);
		game.load.audio('surprise', ['../assets/Surprise Motherfcker Sound Effect (ORIGINAL).mp3']);
		game.load.image('dsk', '../assets/dsk.png');
		game.load.image('pot', '../assets/pot.png');




	},
	
	create: function(){

		background = game.add.sprite(0, 0, "background");
		player = game.add.sprite(30, 300, "woman");
		trump=game.add.sprite(500, 340, "trump");
		trump.frame=5;
		hollande = game.add.sprite(653, 120, 'hollande');
		dsk = game.add.sprite(540, 120, 'dsk');
		pot = game.add.sprite(500, 230, 'pot');
		zone2 = game.add.sprite(450, 400, 'zone2');
		zone2.scale.setTo(0.1, 0.1);
		dsk.scale.setTo(0.6, 0.6);
		pot.scale.setTo(0.2, 0.2);
		whistle=game.add.audio('whistle');
		surprise= game.add.audio('surprise')


		player.animations.add('left', [9, 12, 11, 10, 13], 10, true, true);
		player.animations.add('right', [0, 1, 2, 3, 4], 10, true, true);
		trump.animations.add('chute',[21], true, true);

		zone2.enableBody=true;
		pot.enableBody=true;
		game.physics.arcade.enable(pot);
		game.physics.arcade.enable(zone2);
		game.physics.arcade.collide(player, zone2);
		game.physics.arcade.enable(player);
		scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

		game.physics.arcade.collide(player,trump);
		pot.inputEnabled = true;

		pot.events.onInputDown.add(fall, this);


		keys = game.input.keyboard.createCursorKeys();

	},

	update: function(){

		game.physics.arcade.overlap(player, zone2, siffle, null, this);

		player.body.velocity.x = 0;
		player.body.gravity.y = 0;

		if (keys.left.isDown) {
			player.body.velocity.x = -200;
			player.animations.play('left');


		}
		else if (keys.right.isDown) {
			player.body.velocity.x = 200;
			player.animations.play('right');


		}

		else
		{
			player.animations.stop();

			player.frame = 19;
		}
		function siffle(player, zone2){

			whistle.play();


		}

		function fall(){

			surprise.play();

			setTimeout(function(){

				pot.body.gravity.y = 300;


			},1000)

			setTimeout(function(){
				trump.animations.play('chute');


			},1750)


			score += 250;
			scoreText.text = 'Score: ' + score;


		}

	}



}

