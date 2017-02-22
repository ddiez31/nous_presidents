$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform, word;
    var Trump, Kim, Pou;
    var cursors;
    var weapon, bullet;
    var bulletPool;
    var scoreTrump = 0;
    var scoreKim = 0;
    var scorePou = 0;
    var scoreTextTrump, scoreTextKim, scoreTextPou;
    var direction = 0;
    var shootWhileStanding;



    function preload() {
        game.load.image('background', '../images/scene.jpg');
        game.load.image('platform', '../images/platform.png');
        game.load.spritesheet('Trump', '../images/SpriteTrump.png', 124, 140, 8);
        game.load.spritesheet('Kim', '../images/SpriteKim.png', 124, 140, 8);
        game.load.spritesheet('Pou', '../images/SpritePoutine.png', 124, 140, 8);
        game.load.image('bullet', '../images/persoKim.png');
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
        Trump = game.add.sprite(350, game.world.height - 180, 'Trump');
        Kim = game.add.sprite(20, game.world.height - 180, 'Kim');
        Pou = game.add.sprite(660, game.world.height - 180, 'Pou');
        game.physics.arcade.enable(Trump);
        game.physics.arcade.enable(Kim);
        game.physics.arcade.enable(Pou);

        Trump.animations.add('left', [0, 1, 2, 3], 10, true);
        Trump.animations.add('right', [4, 5, 6, 7], 10, true);
        Trump.scale.setTo(0.8, 0.8);

        Trump.body.collideWorldBounds = true;
        Trump.body.bounce.y = 0;
        Trump.body.gravity.y = 600;

        Kim.animations.add('left', [0, 1, 2, 3], 10, true);
        Kim.animations.add('right', [4, 5, 6, 7], 10, true);
        Kim.scale.setTo(0.8, 0.8);

        Kim.body.collideWorldBounds = true;
        Kim.body.bounce.y = 0;
        Kim.body.gravity.y = 600;

        Pou.animations.add('left', [0, 1, 2, 3], 10, true);
        Pou.animations.add('right', [4, 5, 6, 7], 10, true);
        Pou.scale.setTo(0.8, 0.8);

        Pou.body.collideWorldBounds = true;
        Pou.body.bounce.y = 0;
        Pou.body.gravity.y = 600;

        game.time.events.repeat(Phaser.Timer.SECOND, 420, startKim);
        game.time.events.repeat(Phaser.Timer.SECOND, 420, startPou);

        scoreTextTrump = game.add.text(350, 16, 'Trump: 0', { fontSize: '18px', fill: '#fff' });
        scoreTextKim = game.add.text(20, 16, 'Kim Jong-un: 0', { fontSize: '18px', fill: '#fff' });
        scoreTextPou = game.add.text(660, 16, 'Poutine: 0', { fontSize: '18px', fill: '#fff' });

        // thibault :

        weapon = game.add.weapon(60 , 'bullet');

        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        weapon.bulletSpeed = 400;

        // Create an object pool of bullets
        bulletPool = this.game.add.group();
        for(var i = 0; i < 20; i++) {
            // Create each bullet and add it to the group.
            var bullet = this.game.add.sprite(0, 0, 'bullet');
            bulletPool.add(bullet);

            // Set its pivot point to the center of the bullet
            bullet.anchor.setTo(0.5, 0.5);

            // Enable physics on the bullet
            this.game.physics.enable(bullet, Phaser.Physics.ARCADE);

            // Set its initial state to "dead".
            bullet.kill();
        }
    }

    function startKim() {
        var botKim = game.rnd.integerInRange(1, 4);
        if (botKim == 1) {
            Kim.body.velocity.x = 300;
            Kim.animations.play('right', 10, true);
        } else if (botKim == 2) {
            Kim.body.velocity.x = -300;
            Kim.animations.play('left', 10, true);
        } else if (botKim == 3) {
            Kim.body.velocity.y = -800;
            Kim.animations.stop();
        } else if (botKim == 4) {
            console.log("fire");
            // Kim.fire;
        } else {
            Kim.body.velocity.x = 0;
            Kim.animations.stop();
        }

    }

    function startPou() {
        var botPou = game.rnd.integerInRange(1, 4);
        if (botPou == 1) {
            Pou.body.velocity.x = 300;
            Pou.animations.play('right', 10, true);
        } else if (botPou == 2) {
            Pou.body.velocity.x = -300;
            Pou.animations.play('left', 10, true);
        } else if (botPou == 3) {
            Pou.body.velocity.y = -800;
            Pou.animations.stop();
        } else if (botPou == 4) {
            console.log("fire");
            // Pou.fire;
        } else {
            Pou.body.velocity.x = 0;
            Pou.animations.stop();
        }
    }

    function collectWord(Trump, word) {
        word.kill();
        scoreTrump += 10;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
    }

    function collectWord(Kim, word) {
        word.kill();
        scoreKim += 10;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
    }

    function collectWord(Pou, word) {
        word.kill();
        scorePou += 10;
        scoreTextPou.text = 'Poutine: ' + scorePou;
    }

    function update() {
        // game.physics.arcade.collide(Kim, Pou);
        // game.physics.arcade.collide(Kim, Trump);
        // game.physics.arcade.collide(Pou, Trump);
        game.physics.arcade.collide(Kim, platform);
        game.physics.arcade.collide(Pou, platform);
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
        

        $(window).keypress(function (e) {
                if (cursors.right.isDown){
                    direction = 1;
                console.log('dir = ' + direction);
                }else if (cursors.left.isDown){
                    direction = 2;
                    console.log('dir = ' + direction);




        $(window).keypress(function (e) {
                if (e.keyCode === 32 && direction === 1) {
                    // Get a dead bullet from the pool
                    var bullet = bulletPool.getFirstDead();

                    // If there aren't any bullets available then don't shoot
                    if (bullet === null || bullet === undefined) return;

                    // Revive the bullet
                    // This makes the bullet "alive"
                    bullet.revive();

                    // Bullets should kill themselves when they leave the world.
                    // Phaser takes care of this for me by setting this flag
                    // but you can do it yourself by killing the bullet if
                    // its x,y coordinates are outside of the world.
                    bullet.checkWorldBounds = true;
                    bullet.outOfBoundsKill = true;

                    // Set the bullet position to the gun position.
                    bullet.reset(Trump.body.x + 90, Trump.body.y + 20);


                    // Shoot it
                    bullet.body.velocity.x = 200;
                    bullet.body.velocity.y = 0;
                    console.log('space + right');
                    direction = 1;
                }
            });

        $(window).keypress(function (e) {
                if (e.keyCode === 32 && direction === 2) {
                    // Get a dead bullet from the pool
                    var bullet = bulletPool.getFirstDead();

                    // If there aren't any bullets available then don't shoot
                    if (bullet === null || bullet === undefined) return;

                    // Revive the bullet
                    // This makes the bullet "alive"
                    bullet.revive();

                    // Bullets should kill themselves when they leave the world.
                    // Phaser takes care of this for me by setting this flag
                    // but you can do it yourself by killing the bullet if
                    // its x,y coordinates are outside of the world.
                    bullet.checkWorldBounds = true;
                    bullet.outOfBoundsKill = true;

                    // Set the bullet position to the gun position.
                    bullet.reset(Trump.body.x, Trump.body.y + 20);


                    // Shoot it
                    bullet.body.velocity.x = -200;
                    bullet.body.velocity.y = 0;
                    console.log('space + right');
                    direction = 2;
                }
            });
    }
});

}
});
