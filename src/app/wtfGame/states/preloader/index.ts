import { State, Sprite } from 'phaser-ce';

export default class Preloader extends State {
    preloadBar: Sprite;
    background: Sprite;
    ready = false;

    preload() {
        // These are the assets we loaded in Boot.js
        this.preloadBar = this.add.sprite(300, 400, 'preloadBar');

        // This sets the preloadBar sprite as a loader sprite.
        // What that does is automatically crop the sprite from 0 to full-width
        // as the files below are loaded in.
        this.load.setPreloadSprite(this.preloadBar);

        // Here we load the rest of the assets our game needs.
        // As this is just a Project Template I've not provided these assets, swap them for your own.
        this.load.image('titlepage', 'assets/backgrounds/midgar.png');
        this.load.image('level1', 'assets/backgrounds/sky.png');
        this.load.image('logo', 'assets/images/logoff7.png');

        this.load.audio('titleMusic', 'assets/sounds/01 - Prelude.mp3', true);
        this.load.spritesheet('ff10', 'assets/sprites/ff10.png', 30, 32, -1);
        // + lots of other required assets here
    }

    create() {
        this.game.state.start('Title');
    }
}
