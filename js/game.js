var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

WebFontConfig = {
    google: {
      families: ['Orbitron']
    }

};

var loadState = {

  preload: function() {
    /**
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.audio('boom', ['assets/boom.ogg']);
    game.load.audio('level_up', ['assets/level_up.ogg']);
     **/
    game.load.audio('orang_trust', ['assets/trust.ogg']);
    game.load.image('meme_man', 'assets/meme_man.png');
    game.load.image('orang', 'assets/orang.png');
    game.load.image('vegetal', 'assets/vegetal.png');

  },

  create: function() {
    game.state.start('menu');
  }

};

var menuState = {

  create: function() {

    var image = game.add.sprite(0, 50, 'meme_man');
    game.physics.enable(image, Phaser.Physics.ARCADE);
    image.body.velocity.x=80;

    image2 = game.add.sprite(200, 50, 'orang');
    game.physics.enable(image2, Phaser.Physics.ARCADE);
    image2.body.velocity.x=80;
    music = game.add.audio('orang_trust');
    console.log(music);
    music.play();

  },

    start: function() {
      game.state.start('play');
    },

};

var playState = {

  update: function() {
  },

  create: function () {
    /**
    music = new Phaser.Sound(game,'smallworld',0.75,true);
    music.play();
     **/
  },

  hit_space_thing: function(player, space_thing) {
    /**
    */
  },

};

var endState = {

  create: function() {
    },

    start: function() {
    },

};


//Finally add the game states
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('end', endState);
game.state.start('load');
