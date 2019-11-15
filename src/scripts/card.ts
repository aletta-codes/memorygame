export class Card {
    cardFace: number;
    cardElement: HTMLElement;
    matched: boolean;
    faceUp: boolean;

    constructor (cardFace: number) {
        this.cardFace = cardFace;
        //this.cardElement = ..?
        this.matched = false;
        this.faceUp = false;
    }
}