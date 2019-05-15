import Hero from './../hero';

export default class Account {
    private _heroes: Map<string, Hero> = new Map();
    public pseudo: string;

    constructor(pseudo: string) {
        this.pseudo = pseudo;
    }

    getHeroes(): Map<string, Hero> {
        return this._heroes;
    }

    getHero(name: string): Hero {
        return this._heroes.has(name) ? this._heroes.get(name) : null;
    }

    addHero(heroToAdd: Hero): void {
        console.log(heroToAdd);
        this._heroes.set(heroToAdd.name, heroToAdd);
    }
}
