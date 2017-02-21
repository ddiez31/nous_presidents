$(document).ready(function() {
        var winW = $(this).offsetWidth;
        var winH = $(this).offsetHeight;
        var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
        var platform;
        var Trump;
        var cursors;
        var weapon;
        var bulletPool;
        //var fireButton;
        //var fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);



        function preload() {
            game.load.image('background', '../images/scene.jpg');
            game.load.image('platform', '../images/platform.png');
            game.load.spritesheet('Trump', '../images/SpriteTrump.png', 124, 130, 9);
            game.load.image('bullet', '../images/persoKim.png');


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
            cursors = game.input.keyboard.createCursorKeys();


            // thibault :

            weapon = game.add.weapon(1, 'bullet');

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

        function update() {
            //game.physics.arcade.collide(text1);
            // Trump.animations.play("left");
            // Trump.animations.play("right");

            Trump.body.velocity.x = 0;
            Trump.body.velocity.y = 0;

            if (cursors.left.isDown) {
                Trump.body.velocity.x = -100;
                Trump.animations.play("left");
            } else if (cursors.right.isDown) {
                Trump.body.velocity.x = 100;
                Trump.animations.play("right");
            } else{
                Trump.animations.stop();
            }

            $(window).keypress(function (e) {
                    if (e.keyCode === 32) {
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
                        bullet.reset(Trump.body.x, Trump.body.y);

                        // Shoot it
                        bullet.body.velocity.x = 200;
                        bullet.body.velocity.y = 0;
                    }
                });

        }






    });
