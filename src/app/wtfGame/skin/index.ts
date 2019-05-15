export default class Skin {
    public leftMovesFrames: number[];
    public rightMovesFrames: number[];
    public name: string;
    constructor(name, rightMovesFrames: number[], leftMovesFrames: number[]) {
        this.name = name;
        this.leftMovesFrames = leftMovesFrames;
        this.rightMovesFrames = rightMovesFrames;
    }
}