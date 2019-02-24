import { State, Sprite, Sound, Easing } from 'phaser-ce';

export default class Title extends State {
    background: Sprite;
    logo: Sprite;
    music: Sound;

    create() {
        this.music = this.add.audio('titleMusic');
        this.music.play();

        this.background = this.add.sprite(0, 0, 'titlepage');
        this.background.alpha = 0;

        this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);

        this.add
            .tween(this.background)
            .to({ alpha: 1 }, 2000, Easing.Bounce.InOut, true);
        this.add
            .tween(this.logo)
            .to({ y: 220 }, 2000, Easing.Elastic.Out, true, 2000);

        this.input.onDown.addOnce(this.fadeOut, this);
    }

    fadeOut() {
        this.add
            .tween(this.background)
            .to({ alpha: 0 }, 2000, Easing.Linear.None, true);
        const tween = this.add
            .tween(this.logo)
            .to({ y: 800 }, 2000, Easing.Linear.None, true);

        tween.onComplete.add(this.startGame, this);
    }

    startGame() {
        this.music.stop();
        this.game.state.start('Level1', true, false);
    }
}
