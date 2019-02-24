import { Component, wtfCreateScope } from '@angular/core';
import { WtfGame } from './wtfGame/wtfGame';
import { AUTO, IGameConfig } from 'phaser-ce';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    config: IGameConfig;
    wtf: WtfGame;
    title = 'angularPhaser';

    constructor() {
        this.config = {
            width: 16 * 80,
            height: 9 * 80,
            renderer: AUTO,
            parent: '',
            resolution: 1,
        };
        // this.startGame();
    }

    startGame() {
        this.wtf = !this.wtf ? new WtfGame(this.config) : this.wtf;
        // this.sampleGame = new SampleGame();
    }

    switchSound() {
        this.wtf.sound.mute = !this.wtf.sound.mute;
    }

    soundExist() {
        return this.wtf && this.wtf.sound;
    }
}
