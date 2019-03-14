import * as CardData from './CardData.json';

const unshuffledCards = CardData;

export class Deck {
    cards: any[] = unshuffledCards;

    shuffle() {
        // Sets card as unshuffled ... not required
        this.cards = unshuffledCards;

        // assigns a sort order to each card from Math.random
        const shuffledCards: Array<{ suit: string, value: string | number, sortOrder: number }> = 
            unshuffledCards.map( card => {
                return {
                    ...card,
                    sortOrder: Math.random() * 5200
                }
            });

        // Sorts cards by previously assigned sort order;
        shuffledCards.sort((a, b) => {
            return a.sortOrder - b.sortOrder
        });

        // Removes sortOrder and assigns new shuffled cards to this.cards
        this.cards = shuffledCards.map( card => {
            const { sortOrder, ...newCard } = card; 
            return <{suit: string, value: string | number}>newCard;
        })

    }
}