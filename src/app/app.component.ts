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
    title = 'angularPhaser';

    constructor() {}

    startGame() {
        this.config = {
            width: 16 * 50,
            height: 9 * 50,
            renderer: AUTO,
            parent: '',
            resolution: 1,
        };
        this.wtf = new WtfGame(this.config);
    }
}
