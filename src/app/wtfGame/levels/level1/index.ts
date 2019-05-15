import { State, Sound, Sprite, Physics, Keyboard } from 'phaser-ce';
import Hero from '../../hero';
import Character from '../../character';

export default class Level1 extends State {
    background: Sprite;
    music: Sound;
    // hero: Character = new Character('Tidus', [12, 13, 14], [24, 25, 26], 300);
    player: Character;
    hero: Hero;
    gravity = 1000;
    spawnPoint = {
        x: 130,
        y: 284,
    };

    constructor() {
        super();
        this.gravity = 1000;
    }

    create() {
        this.background = this.add.sprite(-200, -200, 'level1');
        this.music = this.add.audio('level1Audio', 1, true).play();
    }

    addNewPlayer(hero: Hero): void {
        this.hero = hero;
        this.player = this.generateCharater(hero);
        this.physics.enable([this.player], Physics.ARCADE);
    }

    public update() {

        if (this.player) {
            console.log(this.player.body, this.player.isInTheAir());
            this.player.body.velocity.x = 0;
            if (this.rightKeyPressed()) {
                this.player.moveRight();
            } else if (this.leftKeyPressed()) {
                this.player.moveLeft();
            } else if (this.downKeyPressed()) {
                this.player.stop();
            }

            if (this.upKeyPressed()) {
                this.player.jump();
            }
        }
    }

    private generateCharater(hero: Hero): Character {
        return new Character(
            this.game,
            this.spawnPoint.x,
            this.spawnPoint.y,
            this.gravity,
            hero
        );
    }

    private rightKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.RIGHT);
    }

    private leftKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.LEFT);
    }

    private downKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.DOWN);
    }

    private upKeyPressed(): boolean {
        return this.game.input.keyboard.isDown(Keyboard.UP);
    }
}
