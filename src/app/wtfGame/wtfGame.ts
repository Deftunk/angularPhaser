import { Game, IGameConfig } from 'phaser-ce';
import { Boot, Preloader, Title } from './states';
import { Level1 } from './levels';
import Account from './account';
import Hero from './hero';
import Knight from './classes/knight';
import Skin from './skin';

// import Account from ''

export class WtfGame extends Game {
    public gameConfig: IGameConfig;
    private level1: Level1;
    private account: Account;

    constructor(config: IGameConfig) {
        super(config);
        this.level1 = new Level1();
        this.state.add('boot', Boot);
        this.state.add('Preloader', Preloader);
        this.state.add('Title', Title, false);
        this.state.add('Level1', this.level1, false);
        this.state.start('boot', true, false);
        this.account = new Account('Snasch');
    }

    public startGame() {
        this.account.addHero(this.createPopeye());
        this.level1.addNewPlayer(this.account.getHero('Popeye'));
    }

    private createPopeye(): Hero {
        return new Hero(
            'Popeye',
            new Knight(),
            new Skin('ff10', [12, 13, 14], [24, 25, 26])
        );
    }
}
