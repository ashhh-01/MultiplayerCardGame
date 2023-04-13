// Define the possible suits and ranks
const suits = ["hearts", "diamonds", "clubs", "spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

// Define the Card class to represent a single playing card
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

// Define the Deck class to represent a deck of cards
class Deck {
  constructor() {
    this.cards = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    // Shuffle the deck using Fisher-Yates algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    // Draw a card from the top of the deck
    return this.cards.pop();
  }
}
class Game {
    constructor(players) {
      this.players = players;
      this.currentPlayerIndex = 0;
      this.deck = new Deck();
      this.deck.shuffle();
      this.discardPile = [this.deck.draw()];
      for (let i = 0; i < this.players.length; i++) {
        this.players[i].hand = [];
        for (let j = 0; j < 5; j++) {
          this.players[i].hand.push(this.deck.draw());
        }
      }
    }
  
    getCurrentPlayer() {
      return this.players[this.currentPlayerIndex];
    }
  
    getNextPlayer() {
      return this.players[(this.currentPlayerIndex + 1) % this.players.length];
    }
  
    getPreviousPlayer() {
      return this.players[(this.currentPlayerIndex - 1 + this.players.length) % this.players.length];
    }
  
    playCard(cardIndex) {
      const player = this.getCurrentPlayer();
      const card = player.hand[cardIndex];
      if (card.suit === this.discardPile[0].suit || card.rank === this.discardPile[0].rank) {
        // Card is valid, remove it from the player's hand and add it to the discard pile
        player.hand.splice(cardIndex, 1);
        this.discardPile.unshift(card);
        if (card.rank === "ace") {
          // Skip the next player
          this.getNextPlayer();
        } else if (card.rank === "king") {
          // Reverse the order of play
          this.players.reverse();
          this.currentPlayerIndex = (this.players.length - 1) - this.currentPlayerIndex;
        } else if (card.rank === "queen") {
          // Draw 2 cards for the next player
          this.getNextPlayer().hand.push(this.deck.draw(), this.deck.draw());
        } else if (card.rank === "jack") {
          // Draw 4 cards for
  
          this.getNextPlayer().hand.push(this.deck.draw(), this.deck.draw(), this.deck.draw(), this.deck.draw());
      }
      // Check if the player has won
      if (player.hand.length === 0) {
        return player;
      }
      // Move on to the next player
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    } else {
      // Card is invalid, player must draw a card
      player.hand.push(this.deck.draw());
      // Check if the draw pile is empty
      if (this.deck.cards.length === 0) {
        return null; // Game ends in a draw
      }
    }
    return false; // Game continues
  }
}
// Create 4 players
const players = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "Dave" },
  ];
  
  // Start a game
  const game = new Game(players);
  
  // Play the game until someone wins or it ends in a draw
  let winner;
  let result;
  while (!winner && result !== null) {
    const currentPlayer = game.getCurrentPlayer();
    console.log(`${currentPlayer.name}'s turn. Hand:`, currentPlayer.hand);
    console.log("Top of discard pile:", game.discardPile[0]);
    const cardIndex = prompt("Enter the index of the card to play (or 'draw' to draw a card):");
    if (cardIndex === "draw") {
      result = game.playCard(null);
    } else {
      result = game.playCard(parseInt(cardIndex));
    }
    if (result === true) {
      console.log("Card played successfully.");
    } else if (result === false) {
      console.log("Invalid card, must draw a card.");
    } else {
      winner = result;
      console.log(`${winner.name} wins!`);
    }
  }
  