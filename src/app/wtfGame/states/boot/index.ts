import { Physics, State, ScaleManager } from 'phaser-ce';

export default class Boot extends State {
    init() {
        this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = true;

        this.game.physics.startSystem(Physics.ARCADE);

        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        } else {
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
        this.game.state.start('Preloader');
    }
}
