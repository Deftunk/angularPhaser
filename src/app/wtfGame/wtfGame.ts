import { Game, IGameConfig } from 'phaser-ce';
import { Boot, Preloader, Title } from './states';
import { Level1 } from './levels';

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
