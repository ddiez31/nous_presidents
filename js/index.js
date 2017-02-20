$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform;



    function preload() {
        game.load.image('background', '../images/scene.jpg');
        game.load.image('platform', '../images/platform.png');
        game.load.spritesheet('dude', '../images/Trump.png', 32, 48);

    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.image(0, 0, 'background');
        platform = game.add.group();
        platform.enableBody = true;
        var ground = platform.create(-10, game.world.height - 45, 'platform');
        ground = platform.create(70, game.world.height - 45, 'platform');
        ground = platform.create(150, game.world.height - 45, 'platform');
        ground = platform.create(230, game.world.height - 45, 'platform');
        ground = platform.create(310, game.world.height - 45, 'platform');
        ground = platform.create(390, game.world.height - 45, 'platform');
        ground = platform.create(470, game.world.height - 45, 'platform');
        ground = platform.create(550, game.world.height - 45, 'platform');
        ground = platform.create(630, game.world.height - 45, 'platform');
        ground = platform.create(710, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        var ledge = platform.create(400, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(440, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(480, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(520, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(560, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(600, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        var ledge = platform.create(640, 400, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(40, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(80, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(120, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(160, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(200, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(240, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge = platform.create(280, 250, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        Trump = game.add.sprite(32, game.world.height - 150, 'Trump');
        game.physics.arcade.enable(Trump);
        Trump.body.bounce.y = 0.2;
        Trump.body.gravity.y = 300;
        Trump.body.collideWorldBounds = true;
        Trump.animations.add('left', [0, 1, 2, 3], 10, true);
        Trump.animations.add('right', [5, 6, 7, 8], 10, true);



    }

    function update() {


    }




});