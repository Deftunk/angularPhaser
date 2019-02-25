export class Character {
    public name: string;
    private speed: number;
    private leftMovesFrames: number[];
    private rightMovesFrames: number[];

    constructor(
        name: string,
        leftMovesFrames: number[],
        rightMovesFrames: number[],
        speed: number
    ) {
        this.name = name;
        this.leftMovesFrames = leftMovesFrames;
        this.rightMovesFrames = rightMovesFrames;
        this.speed = speed;
    }

    public get jumpStrength(): number {
        return this.speed * 2;
    }

    public get actualSpeed(): number {
        return this.speed;
    }

    getLeftFrames(): number[] {
        return this.leftMovesFrames;
    }
    getRightFrames(): number[] {
        return this.rightMovesFrames;
    }
}
