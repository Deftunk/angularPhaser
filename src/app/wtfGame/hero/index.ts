import Class from './../class';
import Skin from './../skin';


export default class Hero {
    public name: string;
    public class: Class;
    public skin: Skin;

    constructor(name: string, heroClass: Class, skin: Skin) {
        this.name = name;
        this.class = heroClass;
        this.skin = skin;
    }
}
