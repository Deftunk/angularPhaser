import { Sprite, Game, Keyboard } from 'phaser-ce';

export default class Player extends Sprite {
    constructor(game: Game, x: number, y: number) {
        super(game, x, y, 'ff10', 0);

        this.game.physics.arcade.enableBody(this);
        this.scale.multiply(2, 2);
        this.body.collideWorldBounds = true;
        this.body.bounce.y = 0.1;

        this.anchor.setTo(0.5, 0);

        this.animations.add('walk', [0, 12], 10, true);
        this.animations.add('leftWalk', [12, 13, 14], 10, false);
        this.animations.add('rightWalk', [24, 25, 26], 10, false);
        game.add.existing(this);
    }

    update() {
        this.body.velocity.x = 0;

        if (this.game.input.keyboard.isDown(Keyboard.LEFT)) {
            this.body.velocity.x = -300;
            this.animations.play('leftWalk');
        } else if (this.game.input.keyboard.isDown(Keyboard.RIGHT)) {
            this.body.velocity.x = 300;
            this.animations.play('rightWalk');
        } else if (this.game.input.keyboard.isDown(Keyboard.DOWN)) {
            this.animations.frame = 0;
        }
    }
}
