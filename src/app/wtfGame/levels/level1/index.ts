import { State, Sound, Sprite, Physics } from 'phaser-ce';
import Player from '../../player';
import { Character } from '../../characters';

export default class Level1 extends State {
    background: Sprite;
    music: Sound;
    hero: Character = new Character('Tidus', [12, 13, 14], [24, 25, 26], 300);
    player: Player;

    constructor() {
        super();
    }

    create() {
        this.background = this.add.sprite(-200, -200, 'level1');
        this.music = this.add.audio('level1Audio', 1, true).play();
    }

    addPlayer(player: Player) {
        this.player = player;
        this.player.changeCharacter(this.hero);
        this.player.body.gravity.y = 1000;
        this.physics.enable([this.player], Physics.ARCADE);
    }
}
