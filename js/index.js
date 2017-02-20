$(document).ready(function() {
    var winW = $(this).offsetWidth;
    var winH = $(this).offsetHeight;
    var game = new Phaser.Game(winW, winH, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var platform;

    function preload() {
        game.load.image('background', '../images/scene.jpg');
        game.load.image('platform', '../images/platform.png');

    }

    function create() {

        platform = game.add.image(0, 0, 'background');



    }

    function update() {


    }




});


// $(document).ready(function() {
//     var game = new Phaser.Game(960, 639, Phaser.AUTO, '', { preload: preload, create: create, update: update });
//     var player, fire, cursors, fireshot, fireshot2, fireshot3, speed;
//     var frameRate = 20;
//     var loop = true;

//     function preload() {
//         game.load.image('bg', '../images/volcan.jpg');
//         game.load.image('house', '../images/House.png');
//         game.load.spritesheet('fire', '../images/Soreyuke Fire.png', 130, 130, 30);
//         game.load.spritesheet('megaman', '../images/Mega Man.png', 65, 65, 20);
//         game.load.spritesheet('fireshot', '../images/Boktai Solar.png', 170, 100, 90);
//         game.load.spritesheet('house', '../images/House.png', 190, 210, 4);

//     }

//     function create() {
//         game.add.image(0, 0, 'bg');
//         game.add.image(0, 0, 'house');

//         fire = game.add.sprite(170, 290, 'fire');
//         fire.animations.add('center', [0, 1, 2, 3], 10, true);
//         game.physics.arcade.enable(fire);

//         for (var i = 0; i < 40; i++) {
//             var delay = 0;
//             fireshot = game.add.sprite(100, 300, 'fireshot');
//             fireshot2 = game.add.sprite(100, 300, 'fireshot');
//             fireshot3 = game.add.sprite(100, 300, 'fireshot');
//             fireshot.scale.set(game.rnd.realInRange(2, 1));
//             fireshot2.scale.set(game.rnd.realInRange(2, 1));
//             fireshot3.scale.set(game.rnd.realInRange(2, 1));
//             speed = game.rnd.between(6000, 8000);
//             game.add.tween(fireshot).to({ x: 300, y: -250 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
//             game.add.tween(fireshot2).to({ x: 800, y: 0 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
//             game.add.tween(fireshot3).to({ x: 600, y: 650 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

//             delay += 500;
//         }

//         player = game.add.sprite(800, 500, 'megaman');
//         player.animations.add('left', [0, 1, 2], 5, true);
//         player.animations.add('right', [4, 5, 6], 5, true);
//         player.animations.add('up', [8, 9, 10], 5, true);
//         player.animations.add('down', [2, 6], 5, true);
//         game.physics.arcade.enable(player);

//         cursors = game.input.keyboard.createCursorKeys();

//         player.body.collideWorldBounds = true;

//     }

//     function update() {
//         fire.animations.play('center');

//         //  Reset the players velocity (movement)
//         player.body.velocity.x = 0;
//         player.body.velocity.y = 0;

//         // Movement
//         if (cursors.left.isDown) {
//             player.body.velocity.x = -250;
//             player.animations.play('left');
//         } else if (cursors.right.isDown) {
//             player.body.velocity.x = 250;
//             player.animations.play('right');
//         } else if (cursors.up.isDown) {
//             player.body.velocity.y = -250;
//             player.animations.play('up');
//         } else if (cursors.down.isDown) {
//             player.body.velocity.y = 250;
//             player.animations.play('down');
//         } else {
//             player.animations.stop();
//         }
//     }






// });