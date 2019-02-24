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
