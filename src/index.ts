import { Deck } from './Deck';

const deck = new Deck();

console.log("Unshuffled Deck\n", deck.cards);

deck.shuffle();
deck.shuffle();
deck.shuffle();

console.log("\n\nShuffled Deck\n", deck.cards);