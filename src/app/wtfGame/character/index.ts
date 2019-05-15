import { Sprite, Game } from 'phaser-ce';
import Hero from '../hero';

export default class Character extends Sprite {
    hero: Hero;
    normalSpeed = 300;
    lastVerticalVelocity = 0;
    jumpStart: number;
    jumpEnd: number;

    constructor(game: Game, x: number, y: number, gravity: number, hero: Hero) {
        super(game, x, y, hero.skin.name, 0);
        this.hero = hero;

        this.game.physics.arcade.enableBody(this);
        this.scale.multiply(2, 2);
        this.body.collideWorldBounds = true;
        this.body.bounce.y = 0.1;
        this.body.gravity.y = gravity;
        this.anchor.setTo(0.5, 0);
        game.add.existing(this);
        this.game = game;
        this.setAnimations();
    }

    setAnimations() {
        this.animations.add(
            'leftWalk',
            this.hero.skin.rightMovesFrames,
            10,
            false
        );
        this.animations.add(
            'rightWalk',
            this.hero.skin.leftMovesFrames,
            10,
            false
        );
    }

    moveRight(): void {
        this.body.velocity.x = this.hero.class.speed * this.normalSpeed;
        this.animations.play('rightWalk');
    }

    moveLeft(): void {
        this.body.velocity.x = -this.hero.class.speed * this.normalSpeed;
        this.animations.play('leftWalk');
    }

    jump(): void {
        if (this.canJump()) {
            console.log(this.body);
            this.body.velocity.y =
                -this.hero.class.jumpStrength * this.normalSpeed;
        }
    }

    stop(): void {
        this.animations.frame = 0;
    }

    isInTheAir(): boolean {
        const isJumping = this.lastVerticalVelocity === this.body.velocity.y;
        this.lastVerticalVelocity = this.body.velocity.y;
        return !isJumping;
    }

    private canJump(): boolean {
        // console.log(this.body.velocity.y);
        return true;
    }
}
