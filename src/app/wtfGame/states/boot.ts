import { Physics, State, ScaleManager } from 'phaser-ce';

export default class Boot extends State {
    init() {
        //  Unless you specifically need to support multitouch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        // Enable physics
        this.game.physics.startSystem(Physics.ARCADE);

        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        } else {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    }

    preload() {
        this.load.image('preloadBar', 'assets/images/loader.png');
    }

    create() {
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.game.state.start('Preloader');
    }
}

// export default class Boot extends State {
//     cursors: CursorKeys;
//     player: Sprite;

//     public preload(): void {
//         // Load any assets you need for your preloader state here.
//         this.cursors = this.input.keyboard.createCursorKeys();
//         // src/app/wtfGame/assets/backgrounds/sky.png
//         this.game.load.image('sky', 'assets/backgrounds/sky.png');
//         this.game.load.image('ground', 'assets/images/platform.png');
//         this.load.spritesheet('popeye', 'assets/sprites/dude.png', 32, 48);
//         this.game.load.audio('titleMusique', 'assets/sounds/01 - Prelude.mp3');
//     }

//     public create(): void {
//         this.world.bounds.width = 16 * 50;
//         this.world.bounds.height = 9 * 50;
//         // this.world.bounds.width =
//         this.add.image(0, 0, 'sky');
//         this.add.sound('titleMusique').play();
//         this.game.camera.flash(0x000000, 1000);
//         const physicGroup = this.physics.game.add.physicsGroup();
//         const platform0 = physicGroup.create(0, 100, 'ground');
//         const platform1 = physicGroup.create(0, 420, 'ground');
//         const platform2 = physicGroup.create(400, 300, 'ground');
//         this.player = this.physics.game.add.sprite(
//             300,
//             300,
//             'popeye',
//             4,
//             physicGroup
//         );
//         this.world.add(this.player);
//         this.world.setBounds(0, 0, 16 * 50, 9 * 50 - 60);
//         physicGroup.add(this.player);

//         this.player.animations.add('right', [5, 8], 10, true);
//         this.player.animations.add('left', [0, 3], 10, true);
//         this.player.animations.add('turn', [4], 20);
//         this.player.body.gravity.y = 300;
//         this.game.physics.startSystem(Phaser.Physics.ARCADE);
//         this.player.checkWorldBounds = true;
//         this.player.body.checkWorldBounds = true;
//         console.log(this.player);
//         // physicGroup.enableBody = true;
//         // physicGroup.enableBodyDebug = true;
//     }

//     public update(): void {
//         console.log(this.player.position.y);
//         console.log(9 * 50);
//         if (this.player.position.y >= 9 * 50 - 55) {
//             // this.player.body.gravity.y = 0;
//             // this.player.position.y = 9 * 50 - 55;
//         }

//         if (this.cursors.right.isDown) {
//             this.player.animations.play('right', 10, false, false);
//             this.player.body.velocity.x = 100;
//         } else if (this.cursors.left.isDown) {
//             this.player.animations.play('left', 10, false, false);
//             this.player.body.velocity.x = -100;
//         } else {
//             this.player.animations.play('turn', 10, false, false);
//             this.player.body.velocity.x = 0;
//         }
//     }

//     private setPlayer(): void {}
// }
