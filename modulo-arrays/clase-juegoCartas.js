/*
 *  Card Game Implementation
 *  You have an array representing a deck of cards
 *  and you need to perform the following operations:
 *
 *  1. Shuffle the Deck: Randomly rearrange the order of
 *  the cards in the deck.
 *
 *  2. Deal Cards: Deal a specific number of cards to players
 *  from the top od the deck.
 *
 * Do it with the splice() method
 */
const deck = ["♠︎", "♣︎", "♥︎", "♦︎"];
console.log(`Initial deck: ${deck}`);

function randomNumber() {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffleCards(deck) {
    for (let i = 0; i < deck - 1; i++) {
        const cardA = deck[i];
        const cardB = deck[i + 1];
        deck.splice(i, 1, cardB);
        deck.splice(i + 1, 1, cardA);
        console.log(`Deck now is: ${deck}`);
    }
}

shuffleCards(deck);
// console.log(`Final deck: ${deck}`);
