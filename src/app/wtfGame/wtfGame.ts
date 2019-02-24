import { Game, IGameConfig } from 'phaser-ce';
import Boot from './states/boot';

export class WtfGame extends Game {
    public gameConfig: IGameConfig;
    private game: Game;
    constructor(config: IGameConfig) {
        super(config);
        this.state.add('boot', Boot);
        this.state.start('boot');
    }

    public startGame() {}
}
