//import card
import {Card} from './card';
// @ts-ignore
import * as Handlebars from "handlebars";

export class Croupier {
    //cardsConfig:object
    card1Picked: Card;
    card2Picked: Card;
    totalCards: number;
    cards: [number];
    maxScore: number;

    constructor(totalCards: number) {
        this.initGame(totalCards)
    }

    private initGame(totalCards: number) {
        this.resetProperties();
        this.drawCards(totalCards);
        this.shuffleCards(this.cards)
        this.createHTML(this.cards);
        console.log(this.cards);
    }

    //reset all properties to start a new game
    private resetProperties(): void {
        this.card1Picked = null;
        this.card2Picked = null;
        this.totalCards = 0;
        // @ts-ignore
        this.cards = [];
        this.maxScore = 0;
    }

    private drawCards(totalCards: number) {
        //divide total number by 2
        //create two separate cards with same cardface
        //push both cards to array
        let cardSet = totalCards/2;

        for (let card = 1; card <= cardSet; card++) {
            this.cards.push(card);
            this.cards.push(card);
        }
        return this.cards;
    }
    //shuffle cards
    private shuffleCards(cards: [number]) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    createHTML(cards: [number]) {
        let memoryGame = document.getElementById("memory-game");
        let rawTemplate = document.getElementById("all-cards").innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        let ourGeneratedHTML = compiledTemplate({
            cards: this.cards
        });
        memoryGame.innerHTML += ourGeneratedHTML;
        return ourGeneratedHTML;
    }
}