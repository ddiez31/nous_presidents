$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform, bouton, background, ground, ledge;
    var Trump, Kim, Pou;
    var cursors, button;
    var weapon, bulletPool, bullet, bulletTrump, bulletPou, bulletKim;
    var scoreTrump = 0;
    var scoreKim = 0;
    var scorePou = 0;
    var scoreTextTrump, scoreTextKim, scoreTextPou;
    var music, video;
    var direction = 2;
    var dirKim, dirPou;
    var jumpButton;
    var totalTime = 420;
    var timeElapsed = 0;
    var gameTimer;

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
        game.load.image('ecologie', '../images/ecologie.png');
        game.load.image('emploi', '../images/emploi.png');
        game.load.image('securite', '../images/sécurité.png');
        game.load.image('eco', '../images/eco.png');
        game.load.image('trump493', '../images/trump493.png');
        game.load.image('trumpagri', '../images/trumpagri.png');
        game.load.image('trumparmee', '../images/trumparmee.png');
        game.load.image('trumpbudget', '../images/trumpbudget.png');
        game.load.image('trumpclimat', '../images/trumpclimat.png');
        game.load.image('trumpcollec', '../images/trumpcollec.png');
        game.load.image('trumpcommint', '../images/trumpcommint.png');
        game.load.image('trumpculture', '../images/trumpculture.png');
        game.load.image('trumpdeficit', '../images/trumpdeficit.png');
        game.load.image('trumpdette', '../images/trumpdette.png');
        game.load.image('trumpeduc', '../images/trumpeduc.png');
        game.load.image('trumpeffort', '../images/trumpeffort.png');
        game.load.image('trumpeurope', '../images/trumpeurope.png');
        game.load.image('trumpfonct', '../images/trumpfonct.png');
        game.load.image('trumpintegration', '../images/trumpintegration.png');
        game.load.image('trumpjustice', '../images/trumpjustice.png');
        game.load.image('trumplois', '../images/trumplois.png');
        game.load.image('trumpmedias', '../images/trumpmedias.png');
        game.load.image('trumpobjectif', '../images/trumpobjectif.png');
        game.load.audio('zik', '../audio/Street_Fighter_II_Music_-_Guile_-_HQ.ogg');
        game.load.video('champi', '../video/champignon.mp4');
        game.load.image('bouton', '../images/bouton_vote.png');
        game.load.image('win', '../images/elyseehappy.png');
        game.load.image('lost', '../images/elyseeunhappy.png');

    }

    var mots = ["ecologie", "emploi", "securite", "eco", "trump493", "trumpagri", "trumparmee", "trumpbudget", "trumpclimat", "trumpcollec", "trumpcommint", "trumpculture", "trumpdeficit", "trumpdette", "trumpeduc", "trumpeffort", "trumpeurope", "trumpfonct", "trumpintegration", "trumpjustice", "trumplois", "trumpmedias", "trumpobjectif"];

    function randArray(array) {
        return array[Math.floor(Math.random() * array.length)];
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

        //Timer
        startTime = new Date();

        createTimer();
        gameTimer = game.time.events.loop(100, function() {
            updateTimer();
        });

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
        weapon = game.add.weapon(1, 'bouton');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 400;

        bulletPool = this.game.add.group();

        bulletKim = this.game.add.sprite(0, 0, randArray(mots));
        bulletPou = this.game.add.sprite(0, 0, randArray(mots));
        bulletTrump = this.game.add.sprite(0, 0, randArray(mots));
        bulletPool.add(bulletKim);
        bulletPool.add(bulletPou);
        bulletPool.add(bulletTrump);
        bulletKim.anchor.setTo(0.5, 0.5);
        bulletPou.anchor.setTo(0.5, 0.5);
        bulletTrump.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(bulletKim, Phaser.Physics.ARCADE);
        this.game.physics.enable(bulletPou, Phaser.Physics.ARCADE);
        this.game.physics.enable(bulletTrump, Phaser.Physics.ARCADE);
        bulletKim.kill();
        bulletPou.kill();
        bulletTrump.kill();
    };

    //Timer
    function createTimer() {
        timeLabel = game.add.text(705, 45, "00:00", { fontSize: '36px', fill: '#fff' });
        timeLabel.anchor.setTo(0.5, 0);
        timeLabel.align = 'center';
    };

    function updateTimer() {
        var currentTime = new Date();
        var timeDifference = startTime.getTime() - currentTime.getTime();
        timeElapsed = Math.abs(timeDifference / 1000);
        var timeRemaining = totalTime - timeElapsed;
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);
        var result = (minutes < 10) ? "0" + minutes : minutes;
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
        timeLabel.text = result;

        if (timeElapsed >= totalTime) {
            if ((scoreTrump > scoreKim) && (scoreTrump > scorePou)) {
                game.time.events.remove(gameTimer);
                image = game.add.button(0, 0, 'win', actionOnClick);
                image.scale.setTo(0.5, 0.5);
                game.add.text(10, 10, "Nouvelle partie? alors un petit clic!", { fontSize: '20px', fill: '#fff' });
            } else {
                game.time.events.remove(gameTimer);
                image = game.add.button(0, 0, 'lost', actionOnClick);
                image.scale.setTo(0.5, 0.5);
                game.add.text(10, 10, "Nouvelle partie? alors un petit clic!", { fontSize: '20px', fill: '#fff' });
            }

            function actionOnClick() {
                game.state.restart();
            }
        }
    };

    // déplacements aléatoires robots
    function startKim() {
        var botKim = game.rnd.integerInRange(1, 6);
        if (botKim == 1) {
            Kim.body.velocity.x = 400;
            Kim.animations.play('right', 10, true);
            dirKim = 1;
        } else if (botKim == 2) {
            Kim.body.velocity.x = -400;
            Kim.animations.play('left', 10, true);
            dirKim = 2;
        } else if (botKim == 3 && (Kim.body.onFloor() || Kim.body.touching.down)) {
            Kim.body.velocity.y = -800;
            Kim.animations.stop();
        } else if (botKim == 4 || botKim == 5 || botKim == 6) {
            if (dirKim == 1) {
                bulletKim = bulletPool.getFirstDead();
                if (bulletKim === null || bulletKim === undefined) return;
                bulletKim.revive();
                bulletKim.checkWorldBounds = true;
                bulletKim.outOfBoundsKill = true;
                bulletKim.reset(Kim.body.x + 90, Kim.body.y + 20);
                bulletKim.body.velocity.x = 400;
                bulletKim.body.velocity.y = 0;
            } else if (dirKim == 2) {
                bulletKim = bulletPool.getFirstDead();
                if (bulletKim === null || bulletKim === undefined) return;
                bulletKim.revive();
                bulletKim.checkWorldBounds = true;
                bulletKim.outOfBoundsKill = true;
                bulletKim.reset(Kim.body.x, Kim.body.y + 20);
                bulletKim.body.velocity.x = -400;
                bulletKim.body.velocity.y = 0;
            }
        } else {
            Kim.body.velocity.x = 0;
            Kim.animations.stop();
        }
    }

    function startPou() {
        var botPou = game.rnd.integerInRange(1, 6);
        if (botPou == 1) {
            Pou.body.velocity.x = 400;
            Pou.animations.play('right', 10, true);
            dirPou = 1;
        } else if (botPou == 2) {
            Pou.body.velocity.x = -400;
            Pou.animations.play('left', 10, true);
            dirPou = 2;
        } else if (botPou == 3 && (Pou.body.onFloor() || Pou.body.touching.down)) {
            Pou.body.velocity.y = -800;
            Pou.animations.stop();
        } else if (botPou == 4 || botPou == 5 || botPou == 6) {
            if (dirPou == 1) {
                bulletPou = bulletPool.getFirstDead();
                if (bulletPou === null || bulletPou === undefined) return;
                bulletPou.revive();
                bulletPou.checkWorldBounds = true;
                bulletPou.outOfBoundsKill = true;
                bulletPou.reset(Pou.body.x + 90, Pou.body.y + 20);
                bulletPou.body.velocity.x = 400;
                bulletPou.body.velocity.y = 0;
            } else if (dirPou == 2) {
                bulletPou = bulletPool.getFirstDead();
                if (bulletPou === null || bulletPou === undefined) return;
                bulletPou.revive();
                bulletPou.checkWorldBounds = true;
                bulletPou.outOfBoundsKill = true;
                bulletPou.reset(Pou.body.x, Pou.body.y + 20);
                bulletPou.body.velocity.x = -400;
                bulletPou.body.velocity.y = 0;
            }
        } else {
            Pou.body.velocity.x = 0;
            Pou.animations.stop();
        }
    }

    // gestion scores perso
    function collectWordTrumpKim() {
        bulletKim.kill();
        scoreTrump -= 1;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
        scoreKim += 1;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
    }

    function collectWordTrumpPou() {
        bulletPou.kill();
        scoreTrump -= 1;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
        scorePou += 1;
        scoreTextPou.text = 'Poutine: ' + scorePou;
    }

    function collectWordKimTrump() {
        bulletTrump.kill();
        scoreKim -= 1;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
        scoreTrump += 1;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
    }

    function collectWordKimPou() {
        bulletPou.kill();
        scoreKim -= 1;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
        scorePou += 1;
        scoreTextPou.text = 'Poutine: ' + scorePou;
    }

    function collectWordPouTrump() {
        bulletTrump.kill();
        scorePou -= 1;
        scoreTextPou.text = 'Poutine: ' + scorePou;
        scoreTrump += 1;
        scoreTextTrump.text = 'Trump: ' + scoreTrump;
    }

    function collectWordPouKim() {
        bulletKim.kill();
        scorePou -= 1;
        scoreTextPou.text = 'Poutine: ' + scorePou;
        scoreKim += 1;
        scoreTextKim.text = 'Kim Jong-un: ' + scoreKim;
    }

    function update() {
        game.physics.arcade.collide(Kim, platform);
        game.physics.arcade.collide(Pou, platform);
        game.physics.arcade.collide(Trump, platform);
        game.physics.arcade.collide(bulletTrump, Pou, collectWordPouTrump, null, this);
        game.physics.arcade.collide(bulletKim, Pou, collectWordPouKim, null, this);
        game.physics.arcade.collide(bulletTrump, Kim, collectWordKimTrump, null, this);
        game.physics.arcade.collide(bulletPou, Kim, collectWordKimPou, null, this);
        game.physics.arcade.collide(bulletKim, Trump, collectWordTrumpKim, null, this);
        game.physics.arcade.collide(bulletPou, Trump, collectWordTrumpPou, null, this);

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
                bulletTrump = bulletPool.getFirstDead();
                if (bulletTrump === null || bulletTrump === undefined) return;
                bulletTrump.revive();
                bulletTrump.checkWorldBounds = true;
                bulletTrump.outOfBoundsKill = true;
                bulletTrump.reset(Trump.body.x + 90, Trump.body.y + 20);
                bulletTrump.body.velocity.x = 300;
                bulletTrump.body.velocity.y = 0;
                direction = 1;
            } else if (direction == 2) {
                bulletTrump = bulletPool.getFirstDead();
                if (bulletTrump === null || bulletTrump === undefined) return;
                bulletTrump.revive();
                bulletTrump.checkWorldBounds = true;
                bulletTrump.outOfBoundsKill = true;
                bulletTrump.reset(Trump.body.x, Trump.body.y + 20);
                bulletTrump.body.velocity.x = -300;
                bulletTrump.body.velocity.y = 0;
                direction = 2;
            }
        };
    });

    function render() {
        game.debug.soundInfo(music, 20, 32);
    }
});