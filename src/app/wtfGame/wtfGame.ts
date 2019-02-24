import { Game, IGameConfig } from 'phaser-ce';
import Boot from './states/boot';
import Preloader from './states/preloader';
import Title from './title';
import Level1 from './level1';

export class WtfGame extends Game {
    public gameConfig: IGameConfig;
    constructor(config: IGameConfig) {
        super(config);
        this.state.add('boot', Boot);
        this.state.add('Preloader', Preloader);
        this.state.add('Title', Title, false);
        this.state.add('Level1', Level1, false);
        this.state.start('boot');
    }

    public startGame() {}
}
