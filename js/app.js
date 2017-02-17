var game = new Phaser.Game(800, 416, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'right', music;


function preload() {
    game.load.image("background", "assets/cuisine.png");
    game.load.spritesheet("woman", "assets/walkingwoman.png", 70, 95);
    game.load.image("knife", "assets/couteau.png")
    game.load.image("pepper", "assets/pepper.png")
    // game.load.spritesheet("dude", "images/dude.png", 32, 48);

}

var couteaux;
function create() {
    background = game.add.sprite(0, 0, "background");
    player = game.add.sprite(70, 370, "woman");
    knife = game.add.image(400, 165, "knife")
    pepper = game.add.image(250, 185, "pepper")
    pepper.scale.setTo(0.1)
    player.anchor.setTo(0.5);
    knife.scale.setTo(0.2)

    player.scale.setTo(3)
    knife.inputEnabled = true;
    pepper.inputEnabled = true;
    knife.events.onInputDown.add(listener, this);
    pepper.events.onInputDown.add(listener, this);

    // poour enlever moon walk, comment what's down below //
    // player.scale.setTo(-1, 1)

    player.animations.add('left', [13, 12, 11, 10, 9, 8], 6, true, true);
    player.animations.add('turn', [5], 14, true, true);
    player.animations.add('right', [, 1, 2, 3, 4, 5,], 7, true, true);

    game.physics.arcade.enable(player)
    player.body.collideWorldBounds = true;

    keys = game.input.keyboard.createCursorKeys();

}

function update() {
    player.body.velocity.x = 0;
    player.body.gravity.y = 0;

    if (keys.left.isDown) {
        player.body.velocity.x = -200;


        if (facing != 'left');
        {
            player.animations.play('left')
            facing = 'left';
        }
    }

    else if (keys.right.isDown) {
        player.body.velocity.x = 200;

        if (facing != 'right') {
            player.animations.play('right');
            facing = 'right';
        }
    }
}

function listener() {

    // knife.body.velocity.x = 200
    console.log("yo")

}
function listener() {

    // knife.body.velocity.x = 200
    console.log("wesh")

}




