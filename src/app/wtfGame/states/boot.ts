import {} from 'phaser-ce';

export default class Boot extends Phaser.State {
    public preload(): void {
        // Load any assets you need for your preloader state here.
        this.game.load.image('sky', '../../../assets/sky.png');
        this.game.load.audio('titleMusique', '../../../assets/sounds/01 - Prelude.mp3');
    }

    public create(): void {
        this.add.image(0, 0, 'sky');
        this.add.sound('titleMusique').play();
        this.game.camera.flash(0x000000, 1000);
    }
}
