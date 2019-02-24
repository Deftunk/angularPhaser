import { State, Sprite } from 'phaser-ce';

export default class Preloader extends State {
    preloadBar: Sprite;
    background: Sprite;
    ready = false;

    preload() {
        this.preloadBar = this.add.sprite(16 * 45, 9 * 45, 'preloadBar');

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('titlepage', 'assets/backgrounds/midgar.png');
        this.load.image('level1', 'assets/backgrounds/night-forest.png');
        this.load.image('logo', 'assets/images/logoff7.png');

        this.load.audio('titleMusic', 'assets/sounds/01 - Prelude.mp3', true);
        this.load.audio('level1Audio', 'assets/sounds/level1.mp3', true);
        this.load.spritesheet('ff10', 'assets/sprites/ff10.png', 30, 32, -1);
    }

    create() {
        this.game.state.start('Title');
    }
}
