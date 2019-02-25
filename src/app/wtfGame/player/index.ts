import { Sprite, Game, Keyboard } from 'phaser-ce';
import { Character } from './../characters';

export default class Player extends Sprite {
    character: Character;

    constructor(game: Game, x: number, y: number) {
        super(game, x, y, 'ff10', 0);

        this.game.physics.arcade.enableBody(this);
        this.scale.multiply(2, 2);
        this.body.collideWorldBounds = true;
        this.body.bounce.y = 0.1;
        this.anchor.setTo(0.5, 0);
        game.add.existing(this);
        this.game = game;
    }

    public changeCharacter(character: Character) {
        this.character = character;
        this.animations.add(
            'leftWalk',
            this.character.getLeftFrames(),
            10,
            false
        );
        this.animations.add(
            'rightWalk',
            this.character.getRightFrames(),
            10,
            false
        );
    }

    public update() {
        this.body.velocity.x = 0;
        if (this.leftKeyPressed()) {
            this.goToTheLeft();
        } else if (this.rightKeyPressed()) {
            this.goToTheRight();
        } else if (this.downKeyPressed()) {
            this.stop();
        }

        if (this.upKeyPressed() && this.canJump()) {
            this.jump();
        }
    }

    private stop(): void {
        this.animations.frame = 0;
    }

    private canJump(): boolean {
        return true;
        return this.body.touching.down;
    }

    private goToTheLeft(): void {
        this.body.velocity.x = -this.character.actualSpeed;
        this.animations.play('leftWalk');
    }

    private jump(): void {
        this.body.velocity.y = -this.character.jumpStrength;
    }

    private goToTheRight(): void {
        this.body.velocity.x = this.character.actualSpeed;
        this.animations.play('rightWalk');
    }

    private downKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.DOWN);
    }

    private rightKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.RIGHT);
    }

    private upKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.UP);
    }

    private leftKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.LEFT);
    }
}
