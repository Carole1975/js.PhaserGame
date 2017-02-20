var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;


function preload() {
    game.load.image("background", "assets/cuisine.png");
    game.load.spritesheet("woman", "assets/walkingwomangg_720.png", 100, 135);
    game.load.spritesheet("dude", "assets/mansmall_720.png", 92, 175);
}
var player;
var pnj;
var score = 0;
var scoreText;
function create() {
    //music = game.add.audio('micka');
    //music.play();
    background = game.add.sprite(0, 0, "background");
    player = game.add.sprite(70, 200, "woman");
    pnj = game.add.sprite(70, 200, "dude");
    //player.anchor.setTo(0.5);
    // pour enlever moon walk, comment what's down below //
    player.scale.setTo(2, 2);
    pnj.scale.setTo(1.5, 1.5);

    //Onekey.michael.onDown.add(playFx, this);

    player.animations.add('left', [7, 9, 10, 11, 12, 13,], 20, true, true);
    player.animations.add('turn', [6], 24, true, true);
    player.animations.add('right', [0, 1, 2, 3, 4, 5], 20, true, true);

    game.physics.arcade.enable(player)
    
    player.body.collideWorldBounds = true;

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    keys = game.input.keyboard.createCursorKeys();

}
function update() {

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

        player.frame = 5;
    }
}

function score (player, star) {

    star.kill();

    score += 10;
    scoreText.text = 'Score: ' + score;

}




