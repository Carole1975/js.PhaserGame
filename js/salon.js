var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;


function preload() {
    //game.load.image("salon", "assets/salon.png");
    game.load.image("background", "assets/salon.png");
   // game.load.image ("man", "assets/man.png");
    //  game.load.spritesheet("man", "assets/man.png", 98, 240);
    game.load.spritesheet("man", "assets/man2.png", 125, 248);
    game.load.spritesheet("dude", "images/dude.png", 32, 48);
    game.load.image("couteau", "assets/couteau.png", 100, 200);
}


function create() {
    game.physics.startSystem(Phaser.physics);
    music = game.add.audio('micka');
    music.play();
    background = game.add.sprite(0, 0, "background");
    this.background = game.add.sprite(0, 0, "salon");
    this.background.width = game.width;
    this.background.height = game.height;
    man = game.add.sprite(320, 160, "man");
    player = game.add.sprite(70, 370, "dude");
    player.anchor.setTo(0.5);
    // pour enlever moon walk, comment what's down below //
    player.scale.setTo(-1, 1)

    //Onekey.michael.onDown.add(playFx, this);

    player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true, true);
    player.animations.add('turn', [6], 24, true, true);
    player.animations.add('right', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 12, true, true);

    game.physics.arcade.enable(player)
    player.body.collideWorldBounds = true;

    keys = game.input.keyboard.createCursorKeys();
    image = game.add.image(210, 220, "couteau");

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




