$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform, word, bouton, background, ground, ledge;
    var Trump, Kim, Pou;
    var cursors, button;
    var weapon, bullet;
    var bulletPool;
    var scoreTrump = 0;
    var scoreKim = 0;
    var scorePou = 0;
    var scoreTextTrump, scoreTextKim, scoreTextPou;
    var music;
    var video;
    var direction = 2;
    var shootWhileStanding;
    var timer;
    var total = 0;
    var dirKim, dirPou;
    var jumpButton;


    // konami code
    if (window.addEventListener) {
        var kkeys = [];
        konami = "38,38,40,40,37,39,37,39,66,65";
        konami2 = "13";
        window.addEventListener("keydown", function(e) {
            kkeys.push(e.keyCode);
            if (kkeys.toString().indexOf(konami) >= 0) {
                video = game.add.video('champi');
                video.addToWorld(0, 0, 0, 0, 2.5, 2.5);
                video.play(true);
                if (kkeys.toString().indexOf(konami2) >= 0) {
                    kkeys = [];
                    game.state.restart();
                }
            }
        });
    }

    function preload() {
        background = game.load.image('background', '../images/scene.jpg');
        game.load.image('platform', '../images/platform.png');
        game.load.spritesheet('Trump', '../images/SpriteTrump.png', 124, 140, 8);
        game.load.spritesheet('Kim', '../images/SpriteKim.png', 124, 140, 8);
        game.load.spritesheet('Pou', '../images/SpritePoutine.png', 124, 140, 8);
        game.load.image('bullet', '../images/eco.png');
        game.load.audio('zik', '../audio/Street_Fighter_II_Music_-_Guile_-_HQ.ogg');
        game.load.video('champi', '../video/champignon.mp4');
        game.load.image('bouton', '../images/bouton_vote.png');
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.image(0, 0, 'background');

        // plateformes
        platform = game.add.group();
        platform.enableBody = true;
        ground = platform.create(-10, game.world.height - 45, 'platform');
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
        ledge = platform.create(400, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(440, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(480, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(520, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(560, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(600, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
        ledge = platform.create(640, 350, 'platform');
        ledge.scale.setTo(0.5, 0.5);
        ledge.body.immovable = true;
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

        //sprites perso
        Trump = game.add.sprite(350, game.world.height - 180, 'Trump');
        Kim = game.add.sprite(20, game.world.height - 180, 'Kim');
        Pou = game.add.sprite(660, game.world.height - 180, 'Pou');
        game.physics.arcade.enable(Trump);
        game.physics.arcade.enable(Kim);
        game.physics.arcade.enable(Pou);

        // bouton vote
        // button = game.add.button(game.world.centerX - 95, game.world.centerY - 95, 'bouton', actionOnClick, this, 2, 1, 0).scale.setTo(0.5, 0.5);


        // animations perso
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

        // timer robots
        game.time.events.repeat(Phaser.Timer.SECOND, 420, startKim);
        game.time.events.repeat(Phaser.Timer.SECOND, 420, startPou);

        // scores
        scoreTextTrump = game.add.text(350, 16, 'Trump: 0', { fontSize: '18px', fill: '#fff' });
        scoreTextKim = game.add.text(20, 16, 'Kim Jong-un: 0', { fontSize: '18px', fill: '#fff' });
        scoreTextPou = game.add.text(660, 16, 'Poutine: 0', { fontSize: '18px', fill: '#fff' });

        // musique
        music = game.add.audio('zik');
        music.loopFull(0.9);
        music.play();

        // armes tir
        weapon = game.add.weapon(60, 'bullet');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 400;

        bulletPool = this.game.add.group();
        for (var i = 0; i < 20; i++) {
            bullet = this.game.add.sprite(0, 0, 'bullet');
            bulletPool.add(bullet);
            bullet.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(bullet, Phaser.Physics.ARCADE);
            bullet.kill();
        }
    }


    // déplacements aléatoires robots
    function startKim() {
        var botKim = game.rnd.integerInRange(1, 5);
        if (botKim == 1) {
            Kim.body.velocity.x = 300;
            Kim.animations.play('right', 10, true);
            dirKim = 1;
        } else if (botKim == 2) {
            Kim.body.velocity.x = -300;
            Kim.animations.play('left', 10, true);
            dirKim = 2;
        } else if (botKim == 3 && (Kim.body.onFloor() || Kim.body.touching.down)) {
            Kim.body.velocity.y = -800;
            Kim.animations.stop();
        } else if (botKim == 4 || botKim == 5) {
            if (dirKim == 1) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Kim.body.x + 90, Kim.body.y + 20);
                bullet.body.velocity.x = 400;
                bullet.body.velocity.y = 0;
            } else if (dirKim == 2) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Kim.body.x, Kim.body.y + 20);
                bullet.body.velocity.x = -400;
                bullet.body.velocity.y = 0;
            }
        } else {
            Kim.body.velocity.x = 0;
            Kim.animations.stop();
        }
    }

    function startPou() {
        var botPou = game.rnd.integerInRange(1, 5);
        if (botPou == 1) {
            Pou.body.velocity.x = 300;
            Pou.animations.play('right', 10, true);
            dirPou = 1;
        } else if (botPou == 2) {
            Pou.body.velocity.x = -300;
            Pou.animations.play('left', 10, true);
            dirPou = 2;
        } else if (botPou == 3 && (Pou.body.onFloor() || Pou.body.touching.down)) {
            Pou.body.velocity.y = -800;
            Pou.animations.stop();
        } else if (botPou == 4 || botPou == 5) {
            if (dirPou == 1) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Pou.body.x + 90, Pou.body.y + 20);
                bullet.body.velocity.x = 400;
                bullet.body.velocity.y = 0;
            } else if (dirPou == 2) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Pou.body.x, Pou.body.y + 20);
                bullet.body.velocity.x = -400;
                bullet.body.velocity.y = 0;
            }
        } else {
            Pou.body.velocity.x = 0;
            Pou.animations.stop();
        }
    }

    // gestion scores perso
    function collectWordTrump(Trump, bullet) {
        // bullet.kill();
        scoreTrump += 10;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
    }

    function collectWordKim(Kim, bullet) {
        // bullet.kill();
        scoreKim += 10;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
    }

    function collectWordPou(Pou, bullet) {
        // bullet.kill();
        scorePou += 10;
        scoreTextPou.text = 'Poutine: ' + scorePou;
    }

    // gestion bouton
    // function actionOnClick() {
    //     game.state.restart();
    // }


    function update() {
        // game.physics.arcade.collide(Kim, Pou);
        // game.physics.arcade.collide(Kim, Trump);
        // game.physics.arcade.collide(Pou, Trump);
        // game.debug.body(Trump);

        game.physics.arcade.collide(Kim, platform);
        game.physics.arcade.collide(Pou, platform);
        game.physics.arcade.collide(Trump, platform);
        // game.physics.arcade.collide(Trump, bullet);
        // game.physics.arcade.collide(Kim, bullet);
        // game.physics.arcade.collide(Pou, bullet);
        game.physics.arcade.overlap(bullet, Pou, collectWordPou, null, this);
        game.physics.arcade.overlap(bullet, Kim, collectWordKim, null, this);
        game.physics.arcade.overlap(bullet, Trump, collectWordTrump, null, this);

        // déplacement player
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        Trump.body.velocity.x = 0;

        if (cursors.left.isDown) {
            Trump.body.velocity.x = -200;
            Trump.animations.play("left");
            direction = 2;
        } else if (cursors.right.isDown) {
            Trump.body.velocity.x = 200;
            Trump.animations.play("right");
            direction = 1;
        } else {
            Trump.animations.stop();
        }
        if (jumpButton.isDown && (Trump.body.onFloor() || Trump.body.touching.down)) {
            Trump.body.velocity.y = -600;
        }
    };

    // gestion tir player
    $(window).keypress(function(e) {
        if (e.keyCode = 32) {
            if (direction == 1) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Trump.body.x + 90, Trump.body.y + 20);
                bullet.body.velocity.x = 300;
                bullet.body.velocity.y = 0;
                direction = 1;
            } else if (direction == 2) {
                bullet = bulletPool.getFirstDead();
                if (bullet === null || bullet === undefined) return;
                bullet.revive();
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                bullet.reset(Trump.body.x, Trump.body.y + 20);
                bullet.body.velocity.x = -300;
                bullet.body.velocity.y = 0;
                direction = 2;
            }
        };
    });

    function render() {
        game.debug.soundInfo(music, 20, 32);
    }
});