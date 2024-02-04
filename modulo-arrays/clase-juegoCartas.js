/*
 *  Card Game Implementation
 *  You have an array representing a deck of cards
 *  and you need to perform the following operations:
 *
 *  1. Shuffle the Deck: Randomly rearrange the order of
 *  the cards in the deck.
 *
 *  2. Deal Cards: Deal a specific number of cards to players
 *  from the top of the deck.
 *
 * Do it with the splice() method
 */
const deck = ["♠︎", "♣︎", "♥︎", "♦︎"];
console.log(`Initial deck: ${deck}`);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffleCards(deck) {
    for (let i = 0; i < randomNumber(2, 6); i++) {
        const cartaCambiar = randomNumber(0, 4);
        console.log(`Random number: ${cartaCambiar}`);
        if (cartaCambiar == deck.length - 1) {
            const cardA = deck[cartaCambiar];
            const cardB = deck[cartaCambiar - 1];
            deck.splice(cartaCambiar, 1, cardB);
            deck.splice(cartaCambiar - 1, 1, cardA);
        } else {
            const cardA = deck[cartaCambiar];
            const cardB = deck[cartaCambiar + 1];
            deck.splice(cartaCambiar, 1, cardB);
            deck.splice(cartaCambiar + 1, 1, cardA);
        }
        console.log(`Deck now is: ${deck}`);
    }
}
