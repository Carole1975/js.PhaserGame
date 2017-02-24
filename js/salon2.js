var game = new Phaser.Game(800, 500, Phaser.auto, "content", {preload: preload, create: create, update: update});
var music;
function choc (Trump, Couteau){
mal.body.x
mal.body.y
//mrTrump.kill();


}

function preload(){
	game.load.image ("Salon", "assets/salon.png");
	console.log("Bonjour");
	game.load.spritesheet ("Trump", "assets/Trump.png", 133, 140);
	console.log("Salut");
	game.load.spritesheet ("Couteau", "assets/couteau.png", 100, 200);
	console.log("Hi");
	game.load.image ("table", "assets/atable.png");
	game.load.image ("repas", "assets/repas.png");
	game.load.image ("telecommande", "assets/commande.png");
	game.load.image ("bulle", "assets/tele.png");
	game.load.image ("balade", "assets/textVais.png");
	game.load.image ("gisant", "assets/TrumpMort.png");
    game.load.audio("foot", "assets/zic.m4a");
}

function create(){
	this.background = game.add.sprite(0,0, "Salon");
	this.background.width = game.width;
	this.background.height = game.height;
	console.log("semaine 11");

	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//mrTrump.boby.collideWorldBounds = true;
	mrTrump = game.add.sprite(250, 240, "Trump");
	console.log("jeudi");
	game.physics.arcade.enable(mrTrump);
	mrTrump.enableBody= true;
    game.physics.arcade.enable(mrTrump);

	//mrTrump.anchor.setTo(0.5, 0.5);
	//mrTrump.angle = 0;
	//mrTrump.x= 300;
	//mrTrump.y= 260;
	//game.physics.enable(mrTrump, Phaser.Physics.ARCADE);
	//mrTrump.body.velocity.x =10;
	//mrTrump.body.velocity.y =10;
	mrTrump.animations.add("right", [1, 2, 3, 4 ], 10, true, true);
	mrTrump.animations.add("left", [ 1, 2, 3, 4 ], 10, true, true);
	mrTrump.animations.add("up", [0, 1, 2, 3, 4 ], 10, true,true);
	mrTrump.animations.add("down", [0, 1, 2, 3, 4 ], 10, true,true);
    gisant=game.add.image(250, 340, "gisant");	
    gisant.kill();


	console.log("ça marche");
    game.physics.arcade.enable(mrTrump);
	game.physics.startSystem(Phaser.Physics.ARCADE);
	mrTrump.body.collideWorldBounds = true;
	
	coupe = game.add.sprite(710, 420, "Couteau");
	coupe.kill();
	coupe.scale.setTo(-1, 1);
	coupe.anchor.setTo(0.5, 0.5);
	console.log("c'est bien");
	coupe.angle = 30;
	//coupe.x= 710;
	//coupe.y= 320;
	game.physics.enable(coupe, Phaser.Physics.ARCADE);
	coupe.enableBody= true;
	coupe.body.velocity.x =-300;
	coupe.body.velocity.y = -100;
	//coupe.body.velocity.y =10;
	//coupe.animations.add("left", [0],10, true);
	//coupe.animations.add("run");
	//coupe.animations.play("run", 10, true);
keys = game.input.keyboard.createCursorKeys();

table = game.add.sprite(300, 450, "table");
game.physics.arcade.enable(table);
table.enableTable = true;
game.physics.arcade.collide(mrTrump, table);

repas = game.add.sprite(485, 396, "repas");
repas.angle = -5;
game.physics.arcade.enable(repas);
repas.enableRepas = true;
game.physics.arcade.collide(mrTrump, repas);
repas.kill();

telecommande= game.add.sprite (200, 250, "telecommande");
game.physics.arcade.enable(telecommande);
telecommande.enableTelecommande = true;
game.physics.arcade.collide(mrTrump, telecommande);
telecommande.kill();


balade= game.add.sprite(300,400, "balade");
//game.physics.arcade.enable(balade);
//balade.enablebalade = true;
//game.physics.arcade.collide(mrTrump, balade);
balade.kill();

bulle = game.add.sprite(200, 200, "bulle");
bulle.kill();

//mal = game.add.sprite(mrTrump);
game.physics.arcade.collide(mrTrump, coupe);

music = game.add.audio("foot");
music.play();
music.volume= 0;

}

function update(){
game.physics.arcade.overlap(mrTrump, table, servi, null, this);
game.physics.arcade.overlap(mrTrump, repas, manger, null, this);
game.physics.arcade.overlap(mrTrump, telecommande, voir, null, this);
game.physics.arcade.overlap(mrTrump, balade, air, null, this);
game.physics.arcade.overlap(mrTrump, coupe, mort, null, this);
	mrTrump.body.velocity.x =0;
	mrTrump.body.velocity.y =0;
	mrTrump.body.gravity.y =0;

	console.log("je sais");

	
	if (keys.left.isDown) {

		mrTrump.body.velocity.x= -100;
		mrTrump.animations.play("left");
	}

	else if (keys.right.isDown) {

        mrTrump.body.velocity.x= 100;
		mrTrump.animations.play("right");
	}

	else if (keys.up.isDown){

		mrTrump.body.velocity.y= -100;
		mrTrump.animations.play("up");
	}

	else if (keys.down.isDown) {

		mrTrump.body.velocity.y= 100;
		mrTrump.animations.play("down");
	}

	else{

		mrTrump.animations.stop();
		mrTrump.frame = 2
	}



}

function servi(mrTrump, table){
	table.kill();
	console.log("table");
	repas.revive();

}

function manger(mrTrump){
	repas.kill();
	telecommande.revive();
	//coupe.revive();

}

function voir(mrTrump){
	telecommande.kill();
	music.volume = 1;
;    balade.revive();
    bulle.revive();
    setTimeout(function(){             
   coupe.revive();                    
},4000)

}

function air(mrTrump){
	//repas.kill();
	//balade.revive();
}

function mort(){
	//mal.body.x=mrTrump.body.x;
    //mal.body.y=mrTrump.body.y;
	
	
	
	//mrTrump.animations.add("chute_left", [21], 10, false);
mrTrump.frame=22;
   coupe.kill();
   gisant.revive();

mrTrump.kill();

}
