import { State, Sound, Sprite, Physics } from 'phaser-ce';
import Player from '../../player';

export default class Level1 extends State {
    background: Sprite;
    music: Sound;
    player: Player;

    constructor(player: Player) {
        super();
    }

    create() {
        this.background = this.add.sprite(0, 0, 'level1');
        this.player = new Player(this.game, 130, 284);
        this.physics.enable([this.player], Physics.ARCADE);
    }
}
