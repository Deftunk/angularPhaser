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
        this.background = this.add.sprite(-200, -200, 'level1');
        this.music = this.add.audio('level1Audio', 1, true).play();
        this.player = new Player(this.game, 130, 284);
        this.player.body.gravity.y = 1000;
        this.physics.enable([this.player], Physics.ARCADE);
    }
}
