import { Game, IGameConfig } from 'phaser-ce';
import { Boot, Preloader, Title } from './states';
import { Level1 } from './levels';
import Player from './player';

export class WtfGame extends Game {
    public gameConfig: IGameConfig;
    public player: Player;
    private level1: Level1;

    constructor(config: IGameConfig) {
        super(config);
        this.level1 = new Level1();
        this.state.add('boot', Boot);
        this.state.add('Preloader', Preloader);
        this.state.add('Title', Title, false);
        this.state.add('Level1', this.level1, false);
        this.state.start('boot', true, false);
    }

    public startGame() {
        this.player = new Player(this.level1.game, 130, 284);
        this.level1.addPlayer(this.player);
    }
}
