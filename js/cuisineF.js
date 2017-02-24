var BasicGame = {
};

BasicGame.cuisineF = function (game) {

};

// var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;

BasicGame.cuisineF.prototype = {




    preload : function(){
        game.load.image("background", "assets/cuisine.png");
        game.load.spritesheet("woman", "assets/walkingwomangg_720.png", 100, 135);
        game.load.image('pepper', '../assets/pepper.png');
        game.load.image("repas", "/assets/repas_360.png");
        game.load.image("atable", "assets/atable_360.png");
        game.load.image("zone1", "assets/zone1_360.png");
        game.load.image("tele", "assets/tele_360.png");
        game.load.image("couteau", "assets/couteau.png");
        game.load.image("robinet", "assets/robinet_360.png");
        game.load.image("casserole", "assets/casserole_360.png");
        game.load.image("textVais", "assets/textvais_360.png");

    },


    create: function(){

        background = game.add.sprite(0, 0, "background");
        player = game.add.sprite(70, 200, "woman");
        peppers= game.add.sprite(300, 200, "pepper");

        player.scale.setTo(2, 2);
        peppers.scale.set(0.2, 0.2);


        player.animations.add('left', [9, 12, 11, 10, 13], 10, true, true);
        player.animations.add('turn', [6], 24, true, true);
        player.animations.add('right', [0, 1, 2, 3, 4], 10, true, true);


        game.physics.arcade.enable(player);

        peppers.enableBody = true;
        game.physics.arcade.enable(peppers);
        game.physics.arcade.collide(player,peppers);

        player.body.collideWorldBounds = true;

        zone1=game.add.sprite(620, 450, "zone1"); 
        zone1.enenableBody=true;
        game.physics.arcade.enable(zone1);
        game.physics.arcade.collide(player, zone1);

        casserole=game.add.sprite(150,150, "casserole");
        casserole.kill();


        couteau=game.add.sprite(50,100, "couteau");
        couteau.kill();
        game.physics.arcade.enable(couteau);

        couteau.enenableBody=true;
        couteau.inputEnabled=true;
        couteau.events.onInputDown.add(lancer, this);

        robinet=game.add.sprite(500,150, "robinet");

        game.physics.arcade.enable(robinet);

        robinet.enenableBody=true;
        robinet.inputEnabled=true;
        robinet.events.onInputDown.add(vaisselle, this);

        repas=game.add.image(650, 250, "repas");
        repas.kill();
        aTable=game.add.image(650, 200, "atable");
        aTable.kill();
        tele=game.add.image(20, 350, "tele"); 
        tele.kill();


        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        keys = game.input.keyboard.createCursorKeys();

    },
    update : function(){

        game.physics.arcade.overlap(player, peppers, collectPeppers, null, this);
        game.physics.arcade.overlap(player,zone1,table, null, this);
        game.physics.arcade.overlap(player,couteau,lancer, null, this);
        game.physics.arcade.overlap(player,robinet,vaisselle, null, this);

        var onTheGround = player.body.touching.down;


        player.body.velocity.x = 0;
        player.body.gravity.y = 100;

        if (keys.left.isDown) {
            player.body.velocity.x = -200;
            player.animations.play('left');


        }
        else if (keys.right.isDown) {
            player.body.velocity.x = 200;
            player.animations.play('right');


        }

        else if (keys.up.isDown) {
        // Jump when the player is touching the ground and the up arrow is pressed
        player.body.velocity.y = -200;
    }

    else
    {
        player.animations.stop();

        player.frame = 19;
    }

    function collectPeppers (player, peppers) {

        peppers.kill();

        score += 50;
        scoreText.text = 'Score: ' + score;

    }
    function table(player,zone1){
      repas.revive();
      aTable.revive();
      casserole.kill();

      score+=50;
      scoreText.text="score :" +score;

  }
  function lancer() {

      couteau.body.gravity.x=-300;
    // score+=50;
    // scoreText.text="score :" +score;
    tele.kill();
    

}

function vaisselle(player,robinet){
    textVais=game.add.sprite(400,200, "textVais");
    tele=game.add.sprite(20, 350, "tele");
    couteau.revive(); 
    repas.kill();
    aTable.kill();
    tele.revive();


    // score+=50;
    // scoreText.text="score :" +score;

}

game.state.start('rue');

}



}




