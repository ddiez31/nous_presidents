$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform;
    var Trump;
    var cursors;



    function preload() {
        game.load.image('background', '../images/scene.jpg');
        game.load.image('platform', '../images/platform.png');
        game.load.spritesheet('Trump', '../images/SpriteTrump.png', 124, 140, 8);

    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.image(0, 0, 'background');
        platform = game.add.group();
        platform.enableBody = true;
        var ground = platform.create(-10, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(70, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(150, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(230, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(310, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(390, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(470, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(550, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(630, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        ground = platform.create(710, game.world.height - 45, 'platform');
        ground.body.immovable = true;
        var ledge = platform.create(400, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(440, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(480, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(520, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(560, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(600, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        var ledge = platform.create(640, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        // ledge = platform.create(40, 150, 'platform');
        // ledge.scale.setTo(0.5, 0.5);
        // ledge.body.immovable = true;
        ledge = platform.create(100, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(140, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(180, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(220, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(260, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(300, 150, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        Trump = game.add.sprite(32, game.world.height - 180, 'Trump');
        game.physics.arcade.enable(Trump);

        Trump.body.collideWorldBounds = true;
        Trump.animations.add('left', [0, 1, 2, 3], 10, true);
        Trump.animations.add('right', [4, 5, 6, 7], 10, true);
        Trump.scale.setTo(0.8, 0.8);

        Trump.body.collideWorldBounds = true;
        Trump.body.bounce.y = 0;
        Trump.body.gravity.y = 600;



    }

    function update() {

        cursors = game.input.keyboard.createCursorKeys();


        Trump.body.velocity.x = 0;

        game.physics.arcade.collide(Trump, platform);


        if (cursors.left.isDown) {
            Trump.body.velocity.x = -200;
            Trump.animations.play("left");
        } else if (cursors.right.isDown) {
            Trump.body.velocity.x = 200;
            Trump.animations.play("right");
        } else {
            Trump.animations.stop();
        }
        if (cursors.up.isDown) {
            Trump.body.velocity.y = -800;
        }
    }




});