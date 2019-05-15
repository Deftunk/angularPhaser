import { Component } from '@angular/core';
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
    title: string;
    cartridgeInserted: boolean;

    constructor() {
        this.config = {
            width: 16 * 90,
            height: 9 * 90,
            renderer: AUTO,
            parent: '',
            resolution: 1,
        };
        this.title = 'Final fantasy WTF';
        this.cartridgeInserted = false;
    }

    insertCartridge() {
        this.cartridgeInserted = !this.cartridgeInserted;
        this.wtf = new WtfGame(this.config);
    }

    startGame() {
        this.wtf.startGame();
        // this.sampleGame = new SampleGame();
    }

    switchSound() {
        this.wtf.sound.mute = !this.wtf.sound.mute;
    }

    soundExist() {
        return this.wtf && this.wtf.sound;
    }
}
