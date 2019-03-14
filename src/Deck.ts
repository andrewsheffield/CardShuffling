import * as CardData from './CardData.json';

const unshuffledCards = CardData;

export class Deck {
    cards: any[] = unshuffledCards;

    shuffle() {
        this.cards = unshuffledCards;

        const shuffledCards: Array<{ suit: string, value: string | number, sortOrder: number }> = 
            unshuffledCards.map( card => {
                return {
                    ...card,
                    sortOrder: Math.random() * 5200
                }
            });

        shuffledCards.sort((a, b) => {
            return a.sortOrder - b.sortOrder
        });

        this.cards = shuffledCards.map( card => {
            const { sortOrder, ...newCard } = card; 
            return <{suit: string, value: string | number}>newCard;
        })

    }
}